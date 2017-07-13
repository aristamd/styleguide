
var accordion = {
  template: require('./accordion.html'),
  controller: AccordionController,
  bindings: {
    headerContent: '<',
    bodyContent: '<',
    id:'@',
  }
}

AccordionController.$inject = ['$timeout', 'communicationCenterService']

function AccordionController ($timeout, communicationCenterService) {
  var ctrl = this;
  var latestClass = 'fa fa-chevron-right';

  ctrl.$onInit = function () {
      if (!ctrl.id) {
        throw('AristaMD Accordion Error: accordion needs an id');
      }

      ctrl.isOpen = false;
      ctrl.accordionClass = 'fa fa-chevron-right';
      ctrl.accordionChannel = communicationCenterService.createChannel(ctrl.id);

      ctrl.accordionChannel.on('onToggleAccordion')
      .subscribe(function (forceState) {
        ctrl.toggleAccordion(forceState);
      });

      ctrl.toggleAccordion = function (forceState) {
        if (!angular.isUndefined(forceState)) {
          ctrl.accordionClass = forceState ? 'fa fa-chevron-down' : 'fa fa-chevron-right';
          ctrl.isOpen = forceState;
        } else {
          ctrl.accordionClass = ctrl.isOpen === false ? 'fa fa-chevron-down' : 'fa fa-chevron-right';
          ctrl.isOpen = !ctrl.isOpen;
        }
      }

      ctrl.accordionChannel.on('onSetLoadingState')
      .subscribe(function (isLoading) {
        if (isLoading) {
          latestClass =  ctrl.accordionClass;
          ctrl.accordionClass = 'fa fa-spinner fa-pulse fa-fw';
        } else {
          ctrl.accordionClass = latestClass;
        }
      });
  }
}

export default accordion;
