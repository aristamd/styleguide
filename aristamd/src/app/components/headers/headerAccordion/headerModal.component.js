
let headerModal = {
  template: require('./headerModal.html'),
  bindings: {
    resolve : '<'
  },
  controller: function () {
    var ctrl = this;
    ctrl.$onInit = function(){
      ctrl.headerData = ctrl.resolve.data
    }
    // body...
  }
};

export default headerModal;
