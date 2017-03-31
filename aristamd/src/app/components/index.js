import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components.component';
import forms from './forms/';
import routing from './components.config';

const MODULE_NAME = 'components';

  export default angular.module('components', [uiRouter, forms])
    .component('components', components)
    .config(routing)
    .name;
