'use strict';

import template from './app.html';
import './app.scss';

export class AppController {
  constructor() {
    'ngInject';
    console.log('App controller loaded')
  }
}

let appComponent = {
  template: template,
  restrict: 'E',
  controller: AppController
};

export default appComponent;
