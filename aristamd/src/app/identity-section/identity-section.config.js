function routing($stateProvider) {
  $stateProvider
    .state('identity', {
      url: '/identity',
      template: '<identity></identity>',
    });
}

export default routing;
