import angular from 'angular';
import uiRouter from 'angular-ui-router';
import identity from './identity.component';
import routing from './identity.config';

const MODULE_NAME = 'identity';

  export default angular.module('identity', [uiRouter])
    .component('identity', identity)
    .config(routing)
    .name;
