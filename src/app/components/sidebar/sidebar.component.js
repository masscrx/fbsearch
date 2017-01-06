'use strict';

import angular from 'angular';
import template from './sidebar.html';

export class SidebarController {
  construct() {
    console.log('Sidebar component loaded');
  }
}

let sidebarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: SidebarController
}

export default sidebarComponent;