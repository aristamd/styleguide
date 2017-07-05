class AccordionController {
  constructor() {
    const ctrl = this;

    ctrl.$onInit = function () {
      debugger;
    }
  }
}

let accordion = {
  template: require('./accordion.html'),
  controller: AccordionController,
  bindings: {
  }
}

export default accordion;
