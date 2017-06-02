class StepperDemoController {
  constructor($scope, $uibModal, $timeout, communicationCenterService) {
    const ctrl = this;

    ctrl.$onInit = function () {  
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
