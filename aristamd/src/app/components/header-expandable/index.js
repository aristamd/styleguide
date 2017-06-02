import angular from 'angular';
import angularUi from 'angular-ui-bootstrap'
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import headerExpandable from './header-expandable.component';
import headerExpandableController from './header-expandable.controller';
import headerDirective from './header-expandable.directive';

const MODULE_NAME = 'components.headerExpandable';

  export default angular.module(MODULE_NAME, [uiRouter, ngMaterial, angularUi])
    .controller('HeaderExpandableController', headerExpandableController)
    .component('appHeaderAccordion', headerExpandable)
    .directive('appHeaderDirective', headerDirective)
    .name;
