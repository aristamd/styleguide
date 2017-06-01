

let stepperModal = {
  template: require('./stepper-modal.html'),
  bindings: {
  },
  controller: function (communicationCenterService) {
    var ctrl = this;
    ctrl.$onInit = function(){
      ctrl.title = 'Example 2';
      ctrl.stepperApi = {};
      ctrl.stepperChannel = communicationCenterService.createChannel('app-stepper-demo-2');
      ctrl.stepperChannel.on('customClick')
      .subscribe((event)=>{
        ctrl.stepperApi.error('This is an error message.')
      });
      ctrl.steps = [{
        title: 'Step Title',
        content: '<div class="app__stepper-body" ng-if="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+
        's standard dummy text ever since the 1500s,, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
        's standard dummy text ever since the 1500s,, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
        'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>'+
        '<div class="app__stepper-body" ng-if="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+
        's standard dummy text ever since the 1500s,, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
        'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>'+
        '<div class="app__stepper-body" ng-if="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+
        's standard dummy text ever since the 1500s,, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
        'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>'+
        '<div class="app__stepper-body" ng-if="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+
        's standard dummy text ever since the 1500s,, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
        'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>'+
        '<div class="app__stepper-body" ng-if="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+
        's standard dummy text ever since the 1500s,, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
        'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>'+
        '<div class="app__stepper-body" ng-if="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+
        's standard dummy text ever since the 1500s,, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
        'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>'+
        '<div class="app__stepper-body" ng-if="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+
        's standard dummy text ever since the 1500s,, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'+
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
        'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>',
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
            isPrimary: false,
            alignment: 'right',
          }
        ]
      }];
    }
  }
};

export default stepperModal;
