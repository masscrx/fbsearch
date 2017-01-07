'use strict';

import template from './sidebar.html';
import './sidebar.scss';

export class SidebarController {
  construct() {
    console.log('Sidebar component loaded');
  }
}

let sidebarComponent = {
  restrict: 'E',
  bindings: {
    groups: '<'
  },
  template,
  controller: SidebarController
}

export default sidebarComponent;