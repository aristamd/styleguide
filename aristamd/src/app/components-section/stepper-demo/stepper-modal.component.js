

let stepperModal = {
  template: require('./stepper-modal.html'),
  bindings: {
  },
  controller: function ($timeout, communicationCenterService , $templateCache) {
    var ctrl = this;
    ctrl.$onInit = function(){
      ctrl.title = 'Example 2';
      ctrl.stepperApi = {};
      ctrl.stepperChannel = communicationCenterService.createChannel('app-stepper-demo-2');

      ctrl.stepperChannel.on('onErrorClick')
      .subscribe((event)=>{
        ctrl.stepperApi.error('This is an error message.')
      });

      ctrl.stepperChannel.on('onNotificationClick')
      .subscribe((event)=>{
        ctrl.stepperApi.showFeedback('This is a way to show feedback');
        $timeout(() => { ctrl.stepperApi.clearFeedback() }, 3000);
      });

      ctrl.steps = [{
        title: 'Step Title',
        content:$templateCache.get('stepper-step1.html'),
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
  }
};

export default stepperModal;
