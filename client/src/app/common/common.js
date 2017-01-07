'use strict';

import angular from 'angular';
import NavbarMain from './navbar-main/navbar-main';

let commonModule = angular.module('app.common', [
    NavbarMain.name
]);

export default commonModule;