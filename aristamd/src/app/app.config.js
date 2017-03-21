function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
}

export default routing;
