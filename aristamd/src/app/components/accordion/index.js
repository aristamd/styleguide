import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import 'angular-material/angular-material.css';

import accordion from './accordion.component';

const MODULE_NAME = 'components.accordion';

  export default angular.module(MODULE_NAME, [uiRouter, ngMaterial])
    .component('appAccordion', accordion)
    .name;
