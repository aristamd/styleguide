import angular from 'angular';
import uiRouter from 'angular-ui-router';

import componentsSection from './components-section.component';
import routing from './components-section.config';

import stepperDemo from './stepper-demo/stepper-demo.component';
import stepperModal from './stepper-demo/stepper-modal.component';

import headerDemo from './header-demo/header-expandable-demo.component';
import headerModal from './header-demo/header-expandable-modal.component';


import components from '../components';

const MODULE_NAME = 'components-section';

  export default angular.module(MODULE_NAME, [uiRouter, components])
    .component('stepperDemo', stepperDemo)
    .component('stepperModal', stepperModal)
    .component('headerDemo', headerDemo)
    .component('headerModal', headerModal)
    .component('componentsSection', componentsSection)
    .config(routing)
    .name;
