import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import headerAccordion from './headerAccordion.component';
import headerModal from './headerModal.component';
import HeaderAccordionController from './headerAccordion.controller';
import headersDirective from './header-expandable.directive';

const MODULE_NAME = 'headerAccordion';

  export default angular.module( MODULE_NAME, [uiRouter,ngAnimate])
    .controller('HeaderAccordionController' ,HeaderAccordionController)
    .component('appHeaderAccordion', headerAccordion )
    .component('appHeaderModal', headerModal )
    .directive('appHeaderDirective' , headersDirective)
    .name;
   