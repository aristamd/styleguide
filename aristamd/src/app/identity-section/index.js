import angular from 'angular';
import uiRouter from 'angular-ui-router';
import identity from './identity-section.component';
import routing from './identity-section.config';

const MODULE_NAME = 'identity';

  export default angular.module('identity', [uiRouter])
    .component('identity', identity)
    .config(routing)
    .name;
