var identity = {
  bindings: {},
  templateUrl: './identity.html',
  controller: 'IdentityController'
};

angular
  .module('components.identity')
  .component('identity', identity)
  .config(function ($stateProvider) {
    $stateProvider
      .state('identity', {
        parent: 'styleguide',
        url: '/identity',
        component: 'identity',
      });
  });
