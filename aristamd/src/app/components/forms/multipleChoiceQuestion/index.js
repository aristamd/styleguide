import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forms from './MultipleChoiceQuestion.component';

const MODULE_NAME = 'MultipleChoiceQuestion';

  export default angular.module( MODULE_NAME, [uiRouter] )
    .component(MODULE_NAME, forms)
    .name;