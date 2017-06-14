
let headerModal = {
  template: require('./header-expandable-modal.html'),
  bindings: {
    resolve : '<',
    dismiss: '&',
  },
  controller: function () {
    var ctrl = this;
    ctrl.$onInit = function(){
      ctrl.headerData = ctrl.resolve.data
    }
     ctrl.close = function(){
        ctrl.dismiss({$value: 'cancel'});
    }
  }
};

export default headerModal;
