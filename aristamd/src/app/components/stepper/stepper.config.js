function routing ($stateProvider) {
  $stateProvider
    .state({
      name: 'components.stepper',
      url: '/components/stepper',
      template: '<app-stepper></app-stepper>',
    });
}

export default routing;
