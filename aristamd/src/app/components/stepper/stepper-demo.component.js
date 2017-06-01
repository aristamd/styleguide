class StepperDemoController {
  constructor(communicationCenterService, $scope) {
    const ctrl = this;

    ctrl.$onInit = function () {
      ctrl.title = 'Example 1';
      ctrl.stepperApi = {};
      ctrl.stepperChannel = communicationCenterService.createChannel('stepper');
      ctrl.stepperChannel.on('customClick')
      .subscribe((text)=>{
        alert(text);
      });

      ctrl.nextStep  = function () {
        ctrl.stepperApi.next();
      }

      ctrl.steps = [{
        title: 'Step Title',
        content: '<div ng-if="true">Hello Step</div>',
        optional: true,
        actions: [
          {
            type: 'next',
          },
          {
            type: 'back',
          }
        ]
      },
      {
        title: 'Step Title 2',
        content: '<div>Hello Step 2</div>',
        optional: false,
        actions: [
          {
            buttonText:'Next Action',
            type: 'next',
            onActionClick: ctrl.nextStep,
          },
          {
            type: 'back',
          },
          {
            buttonText:'Third',
            type: 'custom',
            onActionClick: 'customClick',
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
