class AccordionDemoController {
  constructor($scope, $uibModal, $timeout, communicationCenterService) {
    const ctrl = this;

    ctrl.$onInit = function () {
       ctrl.options = [
      {
        name:'title',
        type:'string',
        description:''
      },
      {
        name:'steps',
        type:'array',
        description:''
      },
      {
        name:'stepperApi',
        type:'object',
        description:''
      },
      {
        name:'id',
        type:'string',
        description:''
      },
      ]
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

let accordionDemo = {
  template: require('./accordion-demo.html'),
  controller: AccordionDemoController,
}

export default accordionDemo;
