var appNav = {
  bindings: {
    state: '@',
  },
  controller: AppNavComponent,
  templateUrl: './app-nav.html'
};

function AppNavComponent() {
  var ctrl = this;
}

angular
  .module('common')
  .component('appNav', appNav);
