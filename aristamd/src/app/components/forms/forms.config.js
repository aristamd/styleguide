function routing($stateProvider) {
  $stateProvider
    .state('components.forms', {
      url: '/forms',
      template: '<forms></forms>',
    });
}

export default routing;
