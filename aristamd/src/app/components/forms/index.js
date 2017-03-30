import angular from 'angular';
import angularUi from 'angular-ui-bootstrap'
import uiRouter from 'angular-ui-router';
import forms from './forms.component';
import routing from './forms.config';
import appYesNoQuestion from './appYesNoQuestion';
import appYesFreeTextNoQuestion from './appYesFreeTextNoQuestion';
import multipleChoiceQuestion from './multipleChoiceQuestion';
import multipleChoiceFreeTextQuestion from './multipleChoiceFreeTextQuestion';
import appYesNoFreeTextQuestion from './appYesNoFreeTextQuestion';
import multipleSelectQuestion from './multipleSelectQuestion';
import dateQuestion from './dateQuestion';
const MODULE_NAME = 'forms';

  export default angular.module( MODULE_NAME,
    [uiRouter, appYesNoQuestion, appYesFreeTextNoQuestion, multipleChoiceQuestion,
      multipleChoiceFreeTextQuestion, appYesNoFreeTextQuestion, multipleSelectQuestion,
      dateQuestion, angularUi
    ]
  )
    .component(MODULE_NAME, forms)
    .config(routing)
    .name;