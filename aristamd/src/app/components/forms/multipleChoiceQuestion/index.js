import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forms from './multipleChoiceQuestion.component';

const MODULE_NAME = 'multipleChoiceQuestion';

  export default angular.module( MODULE_NAME, [uiRouter] )
    .component(MODULE_NAME, forms)
    .name;