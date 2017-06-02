function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/identity');
}

export default routing;
