import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components.component';
import headers from './headers/';
import routing from './components.config';

const MODULE_NAME = 'components';

  export default angular.module('components', [uiRouter, headers])
    .component('components', components)
    .config(routing)
    .name;
