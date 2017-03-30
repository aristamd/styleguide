import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forms from './multipleChoiceFreeTextQuestion.component';

const MODULE_NAME = 'multipleChoiceFreeTextQuestion';

  export default angular.module( MODULE_NAME, [uiRouter] )
    .component(MODULE_NAME, forms)
    .name;