'use strict';

import template from './app.html';
import './app.scss';

export class AppController {
  constructor() {
    'ngInject';
    console.log('App controller loaded')
    this.groups = [
      {
        id: '1',
        name: 'Js news Jobs'
      },
      {
        id: '2',
        name: 'RubyOnRails Jobs'
      }
    ];
  }
}

let appComponent = {
  template: template,
  restrict: 'E',
  controller: AppController
};

export default appComponent;
