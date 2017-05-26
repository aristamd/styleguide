import angular from 'angular';
import angularUi from 'angular-ui-bootstrap'
import uiRouter from 'angular-ui-router';
import headers from './headers.component';
import routing from './headers.config';
import headerAccordion from './headerAccordion';

const MODULE_NAME = 'headers';

  export default angular.module( MODULE_NAME,
    [uiRouter,headerAccordion,angularUi])
    .component(MODULE_NAME, headers)
    .config(routing)
    .name;