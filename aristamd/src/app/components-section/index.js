import angular from 'angular';
import uiRouter from 'angular-ui-router';

import componentsSection from './components-section.component';
import routing from './components-section.config';

import stepperDemo from './stepper-demo/stepper-demo.component';
import stepperModal from './stepper-demo/stepper-modal.component';

import headerDemo from './header-demo/header-expandable-demo.component';
import headerModal from './header-demo/header-expandable-modal.component';

import accordionHeader1 from './accordion-demo/accordion-header-1.component';
import accordionHeader2 from './accordion-demo/accordion-header-2.component';
import accordionDemo from './accordion-demo/accordion-demo.component';

import components from '../components';
import importTemplates from '../components/header-expandable/header-expandable-template';
import importStepperTemplates from '../components/stepper/stepper-template';

const MODULE_NAME = 'components-section';

  export default angular.module(MODULE_NAME, [uiRouter, components])
    .component('stepperDemo', stepperDemo)
    .component('stepperModal', stepperModal)
    .component('headerDemo', headerDemo)
    .component('headerModal', headerModal)
    .component('accordionHeader1', accordionHeader1)
    .component('accordionHeader2', accordionHeader2)
    .component('accordionDemo', accordionDemo)
    .component('componentsSection', componentsSection)
    .run(['$templateCache', function ($templateCache) {
    	 importTemplates($templateCache)
    }])
    .run(['$templateCache', function ($templateCache) {
    	 importStepperTemplates($templateCache)
    }])
    .config(routing)
    .name;
