import 'bootstrap/less/bootstrap.less';
import '../style/aristamd-font.less';
import '../style/app.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.config';
import identity from './identity/';
import components from './components-section/';

class AppController {
  constructor() {
    this.example = 'hello world';
  }
}

let app = {
    template: require('./app.html'),
    controller: AppController,
  };


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, identity, components])
  .config(routing)
  .component('app', app);

export default MODULE_NAME;
