class StepperDemoController {
  constructor(communicationCenterService, $scope, $uibModal) {
    const ctrl = this;

    ctrl.$onInit = function () {
      ctrl.title = 'Request Builder';
      ctrl.stepperApi = {};
      ctrl.stepperChannel = communicationCenterService.createChannel('stepper');
      ctrl.stepperChannel.on('click')
      .subscribe((text)=>{
        alert(ctrl.title);
      });
      ctrl.steps = [{
        title: 'Step Title',
        content: '<div class="app__stepper-body" ng-if="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+
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
            buttonText:'Next',
            type: 'next',
            onActionClick: ctrl.hola,
            isPrimary: true,
            alignment:'right'

          },
          {
            buttonText:'Back to Step',
            type: 'previous',
            onActionClick: ctrl.previousStep,
            isPrimary: false,
            alignment:'right'
          },
        ]
      },
      {
        title: 'Step Title 2',
        content: '<div ng-if="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+
        's standard dummy text ever since the 1500s, Step 2</div>',
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

    ctrl.open = function (size, parentSelector) {
      var modalInstance = $uibModal.open({
        animation: true,
        component: 'stepperModal',
        size: size,
        resolve:{
          steps: function () {
            return ctrl.steps;
          },
          stepperApi: function () {
             return ctrl.stepperApi;
          },
          title: function () {
             return ctrl.title;
          },
        }
      });
    }

  }

}

let stepperDemo = {
  template: require('./stepper-demo.html'),
  controller: StepperDemoController,
}

export default stepperDemo;
