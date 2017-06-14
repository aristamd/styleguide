import angular from 'angular';
import stepper from './stepper'
import headerExpandable from './header-expandable/';

const MODULE_NAME = 'components';

  export default angular.module('components', [headerExpandable, stepper])
    .name;
