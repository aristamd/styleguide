class StepperController {
  constructor($mdStepper, $timeout, $sce, communicationCenterService) {
    const ctrl = this;
    const baseStepOptions = {
      title: 'Step Title',
      content: '<div>Hello Step</div>',
      optional: false,
      actions: [
        {
          buttonText:'Next',
          type: 'next',
          onActionClick: ctrl.nextStep, // hacer un servicio que acepte subscripciones de acciones y llamarlo
          isPrimary: true
        },
        {
          buttonText:'Back',
          type: 'previous',
          onActionClick: ctrl.previousStep,
          isPrimary: false
        }
      ]
    };

    ctrl.buttonClick = () => {
      debugger;
      ctrl.stepperChannel.post('click', 'hola');
    }

    ctrl.nextStep = function () {
      ctrl.stepperService.skip();
    }

    ctrl.previousStep = function () {
      ctrl.stepperService.back();
    }

    ctrl.$onInit = function () {
      $timeout(function () {
        ctrl.stepperService = $mdStepper('stepper-demo');
        ctrl.stepperApi = ctrl.stepperService;
        ctrl.stepperChannel = communicationCenterService.createChannel('stepper');
      });

      ctrl.steps.map(function (step) {
        step.optional = step.optional ? 'Optional' : '';
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
  }
}

export default stepper;
