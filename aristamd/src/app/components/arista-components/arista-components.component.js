var aristaComponents = {
  bindings: {},
  templateUrl: './arista-components.html',
  controller: 'AristaComponentsController'
};

angular
  .module('components.aristaComponents')
  .component('aristaComponents', aristaComponents)
  .config(function ($stateProvider) {
    $stateProvider
      .state('components', {
        parent: 'styleguide',
        url: '/components',
        component: 'aristaComponents',
      });
  });
