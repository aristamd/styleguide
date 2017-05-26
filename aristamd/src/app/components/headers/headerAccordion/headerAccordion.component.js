let headerAccordion = {
  template: require('./headerAccordion.html'),
  controller: 'HeaderAccordionController',
  bindings: {
  	isExpanded:'<',
  	titleLeft:'<',
  	contentLeft:'<',
  	titleRight:'<',
  	contentRight:'<',
  	nudge:'<',
  	transitionTime:'<',
  },
};

export default headerAccordion;
