'use strict';

import angular from 'angular';
import Sidebar from './sidebar/sidebar';

export default angular
  .module('app.components', [
    Sidebar.name
  ]);