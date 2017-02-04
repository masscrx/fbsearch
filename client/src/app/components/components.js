'use strict';

import angular from 'angular';
import Sidebar from './sidebar/sidebar';
import GroupPosts from './group-posts/group-posts';

export default angular
  .module('app.components', [
    Sidebar.name,
    GroupPosts.name
  ]);