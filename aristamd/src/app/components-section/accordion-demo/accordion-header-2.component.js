class AccordionHeader2Controller {
  constructor($timeout, communicationCenterService) {
    this.$timeout = $timeout;
    this.communicationCenterService = communicationCenterService;
  }

  $onInit() {
    this.isOrdered = false;
    this.isMarked = false;
    this.accordionChannel = this.communicationCenterService.createChannel('accordion-2');
  }

  toggleMarked(event) {
    event.stopPropagation();
    this.isMarked = !this.isMarked;
  }

  toggleOrdered(event) {
    event.stopPropagation();
    this.accordionChannel.post('onSetLoadingState', true);
    this.$timeout(() => {
      this.accordionChannel.post('onSetLoadingState', false);
      this.accordionChannel.post('onToggleAccordion', false);
    },1000);
    this.isOrdered = !this.isOrdered;
  }
}

const accordionHeader2 = {
  template: require('./accordion-header-2.template.html'),
  controller: AccordionHeader2Controller,
}

export default accordionHeader2;
