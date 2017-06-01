

let stepperModal = {
  template: require('./stepper-modal.html'),
  bindings: {
    resolve : '<'
  },
  controller: function () {
    var ctrl = this;
    ctrl.$onInit = function(){
	    ctrl.steps =  ctrl.resolve.steps;
	    ctrl.stepperApi =  ctrl.resolve.stepperApi;
	    ctrl.title =  ctrl.resolve.title;
    }
  }
};

export default stepperModal;