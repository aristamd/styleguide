class StepperDemoController {
  constructor($scope, $uibModal, $timeout, communicationCenterService) {
    const ctrl = this;

    ctrl.$onInit = function () {
      ctrl.title = 'Example 1';
      ctrl.stepperApi = {};
      ctrl.stepperChannel = communicationCenterService.createChannel('app-stepper-demo-1');

      ctrl.stepperChannel.on('onErrorClick')
      .subscribe((event)=>{
        ctrl.stepperApi.error('This is an error message.');
      });

      ctrl.stepperChannel.on('onNotificationClick')
      .subscribe((event)=>{
        ctrl.stepperApi.showFeedback('This is a way to show feedback');
        $timeout(() => { ctrl.stepperApi.clearFeedback() }, 3000);
      });

      ctrl.nextStep  = function () {
        ctrl.stepperApi.next();
      }

      ctrl.steps = [{
        title: 'Step Title',
        content: '<div class="app__stepper-body" ng-if="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+
        's standard dummy text ever since the 1500s,, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
        'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>',
        optional: false,
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
        optional: true,
        actions: [
          {
            buttonText:'Next Action',
            type: 'next',
            onActionClick: ctrl.nextStep,
          },
          {
            type: 'back',
          },
        ]
      },
      {
        title: 'Step Title 3',
        content: '<div>Hello Step 3</div>',
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
            buttonText:'Error Message',
            type: 'custom',
            onActionClick: 'onErrorClick',
            alignment: 'right',
          },
          {
            buttonText:'Notification',
            type: 'custom',
            onActionClick: 'onNotificationClick',
            alignment: 'left',
          }
        ]
      }];
    }
    ctrl.open = function (size, parentSelector) {
      var modalInstance = $uibModal.open({
        animation: true,
        component: 'stepperModal',
        size: size,
      });
    }
  }
}

let stepperDemo = {
  template: require('./stepper-demo.html'),
  controller: StepperDemoController,
}

export default stepperDemo;
