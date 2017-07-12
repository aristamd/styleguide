class AccordionDemoController {
  constructor($scope, $uibModal, $timeout, communicationCenterService) {
    const ctrl = this;

    ctrl.$onInit = function () {

      ctrl.headerContent1 = '<accordion-header-1></accordion-header-1>';
      ctrl.headerContent2 = '<accordion-header-2></accordion-header-2>';
      ctrl.bodyContent = require('./accordion-content.template.html');

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
