function routing($stateProvider) {
  $stateProvider
    .state('components.headers', {
      url: '/headers',
      template: '<headers></headers>',
    });
}

export default routing;
