import angular from 'angular';
import stepper from './stepper'
import headers from './headers/';

const MODULE_NAME = 'components';

  export default angular.module('components', [headers, stepper])
    .name;
