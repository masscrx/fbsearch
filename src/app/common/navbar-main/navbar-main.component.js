'use strict';

import template from './navbar-main.html';
import './navbar-main.scss';

export class NavbarMainController {
  constructor() {
    "ngInject";
    console.log('Navbar-main component loaded');
    this.navbarMenu = [
      {
        name: 'Groups',
        component: 'groups',
        state: 'groups'
      }
    ]
  }

}

let navbarMainComponent = {
  restrict: 'E',
  bindings: {},
  controller: NavbarMainController,
  template: template
}

export default navbarMainComponent;