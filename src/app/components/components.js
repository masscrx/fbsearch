'use strict';

import angular from 'angular';
import Sidebar from './sidebar/sidebar';
import GroupDetails from './group-details/group-details';

export default angular
  .module('app.components', [
    Sidebar.name,
    GroupDetails.name
  ]);