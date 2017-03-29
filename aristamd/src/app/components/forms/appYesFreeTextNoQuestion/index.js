import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forms from './appYesFreeTextNoQuestion.component';

const MODULE_NAME = 'appYesFreeTextNoQuestion';

  export default angular.module( MODULE_NAME, [uiRouter] )
    .component(MODULE_NAME, forms)
    .name;