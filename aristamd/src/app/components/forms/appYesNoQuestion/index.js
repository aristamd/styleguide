import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forms from './appYesNoQuestion.component';

const MODULE_NAME = 'appYesNoQuestion';

  export default angular.module( MODULE_NAME, [uiRouter] )
    .component(MODULE_NAME, forms)
    .name;