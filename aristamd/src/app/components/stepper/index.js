import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularUI from 'angular-ui-bootstrap';
import ngMaterial from 'angular-material';
import rx from 'rx';

import 'angular-material/angular-material.css';
import 'material-steppers/dist/material-steppers.js';
import 'material-steppers/dist/material-steppers-tpl.js';
import 'material-steppers/dist/material-steppers.css';

import channelService from '../../common/channel.service';
import communicationCenterService from '../../common/communication-center.service'
import stepper from './stepper.component';

import dynamicDirective from '../../common/dynamic-compile.directive';

const MODULE_NAME = 'components.stepper';

  export default angular.module(MODULE_NAME, [uiRouter, ngMaterial, angularUI, 'mdSteppers'])
    .service('ChannelService', channelService)
    .service('communicationCenterService', communicationCenterService)
    .directive('appDynamic', dynamicDirective)
    .component('appStepper', stepper)
    .name;
