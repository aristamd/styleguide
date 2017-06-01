class StepperController {
  constructor($mdStepper, $timeout, $sce, communicationCenterService) {
    const ctrl = this;

    const defaultNextAction = {
      buttonText:'Next',
      type: 'next',
      onClick: () => {
        ctrl.stepperService.next();
      },
      isPrimary: true
    };

    const defaultPreviousAction = {
      buttonText:'Back',
      type: 'back',
      onClick: () => {
        ctrl.stepperService.back();
      },
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
      $timeout(function () {
        ctrl.stepperService = $mdStepper('stepper-demo');
        ctrl.stepperApi = ctrl.stepperService;
        ctrl.stepperChannel = communicationCenterService.createChannel('stepper');
      });

      ctrl.steps = ctrl.steps.map((step) => {
        step.optional = step.optional ? 'Optional' : '';
        if (step.actions) {
          step.actions = step.actions.map((action) => {
            let tempAction = {};
            if (action.type === 'next') {
              angular.merge(tempAction, defaultNextAction, action);
            } else if (action.type === 'back') {
              angular.merge(tempAction, defaultPreviousAction, action);
            }
            else if (action.type === 'custom') {
              action.onClick = (event) => {
                ctrl.stepperChannel.post(action.onActionClick, event);
              };
              tempAction = action;
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
    resolve:'<',
  }
}

export default stepper;
