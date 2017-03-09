var principles = {
  bindings: {},
  templateUrl: './principles.html',
  controller: 'PrinciplesController'
};

angular
  .module('components.principles')
  .component('principles', principles)
  .config(function ($stateProvider) {
    $stateProvider
      .state('principles', {
        parent: 'styleguide',
        url: '/principles',
        component: 'principles',
      });
  });
