import angular from 'angular';
import angularUi from 'angular-ui-bootstrap'
import uiRouter from 'angular-ui-router';
import headers from './headers.component';
import routing from './headers.config';
import headerAccordion from './headerAccordion';
import ngMaterial from 'angular-material';

import 'angular-material/angular-material.css';

const MODULE_NAME = 'headers';

  export default angular.module( MODULE_NAME,
    [uiRouter,headerAccordion,angularUi,ngMaterial])
    .component(MODULE_NAME, headers)
    .config(routing)
    .name;