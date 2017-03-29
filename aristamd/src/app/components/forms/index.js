import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forms from './forms.component';
import routing from './forms.config';
import appYesNoQuestion from './appYesNoQuestion'
import appYesFreeTextNoQuestion from './appYesFreeTextNoQuestion'
const MODULE_NAME = 'forms';

  export default angular.module( MODULE_NAME, [uiRouter, appYesNoQuestion, appYesFreeTextNoQuestion] )
    .component(MODULE_NAME, forms)
    .config(routing)
    .name;