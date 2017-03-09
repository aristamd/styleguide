var app = {
  templateUrl: './app.html',
  controller: 'AppController'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider) {
    $stateProvider
      .state('styleguide', {
        redirectTo: 'home',
        url: '/styleguide',
        data: {
          requiredAuth: false
        },
        component: 'app'
      })
  });
