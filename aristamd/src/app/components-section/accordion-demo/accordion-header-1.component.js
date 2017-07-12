class AccordionHeader1Controller {
  constructor($timeout, communicationCenterService) {
    const ctrl = this;

    ctrl.$onInit = function () {
      ctrl.isOrdered = false;
      ctrl.isMarked = false;
      ctrl.accordionChannel = communicationCenterService.createChannel('accordion-1');
    }

    ctrl.toggleMarked = function (event) {
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

let accordionHeader1 = {
  template: require('./accordion-header-1.template.html'),
  controller: AccordionHeader1Controller,
}

export default accordionHeader1;
