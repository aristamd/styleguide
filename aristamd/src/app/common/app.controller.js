function AppController(AuthService) {
  var ctrl = this;

  ctrl.$onInit = function () {
    ctrl.state = 'Home';
  };
  ctrl.onStateChanged = function (event) {
    ctrl.state = event.state;
  };
}

angular
  .module('common')
  .controller('AppController', AppController);
