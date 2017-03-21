function routing ($stateProvider) {
  $stateProvider
    .state({
      name: 'components',
      url: '/components',
      template: '<components></components>',
    });
}

export default routing;
