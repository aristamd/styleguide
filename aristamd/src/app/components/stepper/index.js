import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularUI from 'angular-ui-bootstrap';
import ngMaterial from 'angular-material';

import 'angular-material/angular-material.css';
import 'material-steppers/dist/material-steppers.js';
import 'material-steppers/dist/material-steppers-tpl.js';
import 'material-steppers/dist/material-steppers.css';

import stepper from './stepper.component';
import stepperDemo from './stepper-demo.component';
import routing from './stepper.config';
import dynamicDirective from './dynamic-compile.directive';

const MODULE_NAME = 'components.stepper';

  export default angular.module(MODULE_NAME, [uiRouter, ngMaterial, angularUI, 'mdSteppers'])
    .directive('appDynamic', dynamicDirective)
    .component('appStepper', stepper)
    .component('stepperDemo', stepperDemo)
    .config(routing)
    .name;
