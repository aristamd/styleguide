
var accordion = {
  template: require('./accordion.html'),
  controller: AccordionController,
  bindings: {
  }
}


function AccordionController () {
  var ctrl = this;

  ctrl.$onInit = function () {
      ctrl.isOpen = false;
  }
}

export default accordion;
