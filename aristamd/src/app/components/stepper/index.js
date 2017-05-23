import angular from 'angular';
import uiRouter from 'angular-ui-router';
import stepper from './stepper.component';
import routing from './stepper.config';

const MODULE_NAME = 'components.stepper';

  export default angular.module(MODULE_NAME, [uiRouter])
    .component('appStepper', stepper)
    .config(routing)
    .name;
