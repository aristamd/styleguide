import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularUi from 'angular-ui-bootstrap'
import forms from './bloodPressureDateQuestion.component';

const MODULE_NAME = 'bloodPressureDateQuestion';

  export default angular.module( MODULE_NAME, [uiRouter, angularUi] )
    .component(MODULE_NAME, forms)
    .name;