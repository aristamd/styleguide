function routing ($stateProvider) {
  $stateProvider
    .state({
      name: 'components',
      url: '/components',
      template: '<components-section></components-section>',
    })
    .state({
      name: 'components.stepper',
      url: '/components/stepper',
      template: '<stepper-demo></stepper-demo>'
    });
}

export default routing;
