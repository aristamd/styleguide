let headerExpandable = {
  template: require('./header-expandable.html'),
  controller: 'HeaderExpandableController',
  bindings: {
  	isExpanded: '<',
  	titleLeft: '<',
  	contentLeft: '<',
  	titleRight: '<',
  	contentRight: '<',
  	nudge: '<',
  	transitionTime: '<',
  },
};

export default headerExpandable;
