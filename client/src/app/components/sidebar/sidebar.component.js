'use strict';

import template from './sidebar.html';
import './sidebar.scss';

export class SidebarController {
  /*@ngInject*/
  constructor(ngProgressFactory, GroupService) {
    console.log('Sidebar component loaded');
    this._GroupService = GroupService;
    this.progressbar = ngProgressFactory.createInstance();
  }

  updatePosts(group) {
    console.log('group', group);
    this._GroupService
      .updatePosts(group)
      .then( (res) => console.log(res))
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