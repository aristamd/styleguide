function AppSidebarController() {
  var ctrl = this;
  ctrl.contactTags = [{
    label: 'Home',
    icon: 'home',
    state: 'home',
  }, {
    label: 'Principles',
    icon: 'grade',
    state: 'principles',
  }, {
    label: 'Identity',
    icon: 'fingerprint',
    state: 'identity',
  }, {
    label: 'Components',
    icon: 'widgets',
    state: 'components',
  }];

  ctrl.onStateChanged = function (state) {
    ctrl.onStateChange({
      $event: {
        state: state,
      },
    });
  };
}

angular
  .module('common')
  .controller('AppSidebarController', AppSidebarController);
