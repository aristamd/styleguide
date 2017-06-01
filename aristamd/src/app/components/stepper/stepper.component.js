class StepperController {
  constructor($mdStepper, $timeout, $sce, communicationCenterService) {
    const ctrl = this;

    const defaultNextAction = {
      buttonText:'Next',
      type: 'next',
      onClick: () => {
        ctrl.stepperService.next();
      },
      isPrimary: true,
      alignment: 'right',
    };

    const defaultPreviousAction = {
      buttonText:'Back',
      type: 'back',
      onClick: () => {
        ctrl.stepperService.back();
      },
      isPrimary: false,
      alignment: 'left',
    };

    const defaultCustomAction = {
      buttonText:'Click me',
      type: 'custom',
      isPrimary: false,
      alignment: 'right',
    };

    const baseStepOptions = {
      title: 'Step Title',
      content: '<div>Hello Step</div>',
      optional: false,
      actions: [
        {

        },
        {
          buttonText:'Back',
          type: 'back',
          onActionClick: ctrl.previousStep,
          isPrimary: false
        }
      ]
    };

    ctrl.$onInit = function () {
      if (angular.isUndefined(ctrl.id)) {
        throw('AristaMD Stepper Error: stepper needs an id');
      }
      $timeout(function () {
        ctrl.stepperService = $mdStepper(ctrl.id);
        ctrl.stepperApi = ctrl.stepperService;
      });
      ctrl.stepperChannel = communicationCenterService.createChannel(ctrl.id);
      ctrl.steps = ctrl.steps.map((step) => {
        step.optional = step.optional ? 'Optional' : '';
        if (step.actions) {
          step.actions = step.actions.map((action) => {
            let tempAction = {};
            if (action.type === 'next') {
              angular.merge(tempAction, defaultNextAction, action);
            } else if (action.type === 'back') {
              angular.merge(tempAction, defaultPreviousAction, action);
            } else if (action.type === 'custom') {
              angular.merge(tempAction, defaultCustomAction, action);
              tempAction.onClick = (event) => {
                ctrl.stepperChannel.post(action.onActionClick, event);
              };
            }
          return tempAction;
          });
        }
        return step;
      });
    }
  }
}

let stepper = {
  template: require('./stepper.html'),
  controller: StepperController,
  bindings: {
    title: '@',
    stepperApi: '=',
    steps: '<',
    id:'@',
  }
}

export default stepper;
