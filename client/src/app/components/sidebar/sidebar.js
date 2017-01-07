'use strict';

import angular from 'angular';
import sidebarComponent from './sidebar.component';

export default angular
  .module('app.components.sidebar', [])
  .component('sidebar', sidebarComponent);