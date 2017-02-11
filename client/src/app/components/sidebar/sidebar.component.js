'use strict';

import template from './sidebar.html';
import './sidebar.scss';

export class SidebarController {
  /*@ngInject*/
  constructor() {
    console.log('Sidebar component loaded');
  }
}

let sidebarComponent = {
  restrict: 'E',
  bindings: {
    groups: '<',
    onUpdatePosts: '&'
  },
  template,
  controller: SidebarController
}

export default sidebarComponent;