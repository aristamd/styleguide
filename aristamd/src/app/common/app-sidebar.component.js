var appSidebar = {
  templateUrl: './app-sidebar.html',
  bindings: {
    onStateChange: '&',
  },
  controller: 'AppSidebarController',
};

angular
  .module('common')
  .component('appSidebar', appSidebar);
