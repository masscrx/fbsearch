'use strict';

import angular from 'angular';
import Sidebar from './sidebar/sidebar';
import GroupPosts from './group-posts/group-posts';
import GroupDetails from './group-details/group-details';

export default angular
  .module('app.components', [
    Sidebar.name,
    GroupPosts.name,
    GroupDetails.name
  ]);