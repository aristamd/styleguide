import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components.component';
import routing from './components.config';

const MODULE_NAME = 'components';

  export default angular.module('components', [uiRouter])
    .component('components', components)
    .config(routing)
    .name;
