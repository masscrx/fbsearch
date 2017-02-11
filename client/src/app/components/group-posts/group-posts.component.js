'use strict';

import template from './group-posts.html';
import './group-posts.scss';

export class GroupPostsController {
  /*@ngInject*/
  constructor(GroupService, $stateParams) {
    this._GroupService = GroupService;
    this.page = 1;
    this.group = {
      id: $stateParams.groupId,
      posts: []
    };
  }

  $onInit() {
    this._GroupService
      .posts( { groupId: this.group.id, page: this.page } )
      .then( (res) => {
        this.group.posts = res.data.posts;
        this.group.name = res.data.group.name;
      })
  }
}

let groupPostsComponent = {
  template: template,
  controller: GroupPostsController
}

export default groupPostsComponent;