import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forms from './multipleSelectQuestion.component';

const MODULE_NAME = 'multipleSelectQuestion';

  export default angular.module( MODULE_NAME, [uiRouter] )
    .component(MODULE_NAME, forms)
    .name;