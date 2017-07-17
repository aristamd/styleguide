function routing ($stateProvider) {
  $stateProvider
    .state({
      name: 'components',
      url: '/components',
      template: '<components-section></components-section>',
      abstract: true,
    })
    .state({
      name: 'components.headers',
      url: '/components/header-expandable',
      template: '<header-demo></header-demo>'
    })
    .state({
      name: 'components.stepper',
      url: '/components/stepper',
      template: '<stepper-demo></stepper-demo>'
    })
    .state({
      name: 'components.accordion',
      url: '/components/accordion',
      template: '<accordion-demo></accordion-demo>'
    });
}

export default routing;
