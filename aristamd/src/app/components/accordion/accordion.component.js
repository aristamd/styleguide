
var accordion = {
  template: require('./accordion.html'),
  controller: AccordionController,
  bindings: {
  }
}

AccordionController.$inject = ['$timeout']

function AccordionController ($timeout) {
  var ctrl = this;

  ctrl.$onInit = function () {
      ctrl.isOpen = false;
      ctrl.isOrdered = false;
      ctrl.isMarked = false;
  }

  ctrl.toggleAccordion = function () {
    if(ctrl.isOpen === false){
      ctrl.isLoading = true;
      $timeout(function () {
        ctrl.isLoading = false;
        ctrl.isOpen = !ctrl.isOpen;
     }, 1000);
   } else {
     ctrl.isOpen = !ctrl.isOpen;
   }
  }
}

export default accordion;
