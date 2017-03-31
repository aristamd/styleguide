import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forms from './appYesNoFreeTextQuestion.component';

const MODULE_NAME = 'appYesNoFreeTextQuestion';

  export default angular.module( MODULE_NAME, [uiRouter] )
    .component(MODULE_NAME, forms)
    .name;