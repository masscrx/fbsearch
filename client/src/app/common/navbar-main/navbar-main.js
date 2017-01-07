'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarMainComponent from './navbar-main.component';

let navbarMainModule = angular.module('app.common.navbarMain', [
  uiRouter
])

.component('navbarMain', navbarMainComponent);

export default navbarMainModule;
