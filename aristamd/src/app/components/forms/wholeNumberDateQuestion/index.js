import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularUi from 'angular-ui-bootstrap'
import forms from './wholeNumberDateQuestion.component';

const MODULE_NAME = 'wholeNumberDateQuestion';

  export default angular.module( MODULE_NAME, [uiRouter, angularUi] )
    .component(MODULE_NAME, forms)
    .name;