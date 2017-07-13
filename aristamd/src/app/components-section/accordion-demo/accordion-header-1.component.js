class AccordionHeader1Controller {
  constructor($timeout, communicationCenterService) {
    this.$timeout = $timeout;
    this.communicationCenterService = communicationCenterService;
  }

  $onInit() {
    this.isOrdered = false;
    this.isMarked = false;
    this.accordionChannel = this.communicationCenterService.createChannel('accordion-1');
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

const accordionHeader1 = {
  template: require('./accordion-header-1.template.html'),
  controller: AccordionHeader1Controller,
}

export default accordionHeader1;
