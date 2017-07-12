class AccordionHeader2Controller {
  constructor($timeout, communicationCenterService) {
    const ctrl = this;

    ctrl.$onInit = function () {
      ctrl.isOrdered = false;
      ctrl.isMarked = false;
      ctrl.accordionChannel = communicationCenterService.createChannel('accordion-2');
    }

    ctrl.toggleMarked = function (event) {
      debugger;
      event.stopPropagation();
      ctrl.isMarked = !ctrl.isMarked;
    }

    ctrl.toggleOrdered = function (event) {
      event.stopPropagation();
      ctrl.accordionChannel.post('onSetLoadingState', true);
      $timeout(function (){
        ctrl.accordionChannel.post('onSetLoadingState', false);
        ctrl.accordionChannel.post('onToggleAccordion', false);
      },1000);
      ctrl.isOrdered = !ctrl.isOrdered;
    }
  }
}

let accordionHeader2 = {
  template: require('./accordion-header-2.template.html'),
  controller: AccordionHeader2Controller,
}

export default accordionHeader2;
