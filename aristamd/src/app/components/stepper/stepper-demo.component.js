class StepperDemoController {
  constructor() {
    const ctrl = this;

    ctrl.$onInit = function () {
      ctrl.title = 'Example 1';
      ctrl.stepperApi = {};
      ctrl.hola = function () {
        alert('hola mundo');
      }
      ctrl.steps = [{
        title: 'Step Title',
        content: '<div ng-if="true">Hello Step</div>',
        optional: true,
        actions: [
          {
            buttonText:'Next',
            type: 'next',
            onActionClick: ctrl.hola,
            isPrimary: true
          },
          {
            buttonText:'Back',
            type: 'previous',
            onActionClick: ctrl.previousStep,
            isPrimary: false
          }
        ]
      },
      {
        title: 'Step Title 2',
        content: '<div>Hello Step 2</div>',
        optional: false,
        actions: [
          {
            buttonText:'Next',
            type: 'next',
            onActionClick: ctrl.nextStep,
            isPrimary: true
          },
          {
            buttonText:'Back',
            type: 'previous',
            onActionClick: ctrl.previousStep,
            isPrimary: false
          }
        ]
      }];
    }
  }
}

let stepperDemo = {
  template: require('./stepper-demo.html'),
  controller: StepperDemoController,
}

export default stepperDemo;
