'use strict';

import template from './group-posts.html';
import './group-posts.scss';

export class GroupPostsController {
  /*@ngInject*/
}

let groupPostsComponent = {
  template: template,
  controller: GroupPostsController,
  bindings: {
    posts: '<',
    onLoadMore: '&'
  }
}

export default groupPostsComponent;