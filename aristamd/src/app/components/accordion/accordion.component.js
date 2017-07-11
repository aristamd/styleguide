
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
      ctrl.accordionClass = 'fa fa-chevron-right';
  }

  ctrl.toggleAccordion = function () {
    if(ctrl.isOpen === false){
      ctrl.accordionClass = 'fa fa-spinner fa-pulse fa-fw';
      $timeout(function () {
        ctrl.isOpen = !ctrl.isOpen;
        ctrl.accordionClass = 'fa fa-chevron-down';
     }, 1000);
   } else {
     ctrl.accordionClass = 'fa fa-chevron-right';
     ctrl.isOpen = !ctrl.isOpen;
   }
  }

  ctrl.toggleMarked = function (event) {
    event.stopPropagation();
    ctrl.isMarked = !ctrl.isMarked;
  }

  ctrl.toggleOrdered = function (event) {
    event.stopPropagation();
    ctrl.isOrdered = !ctrl.isOrdered;
  }
}

export default accordion;
