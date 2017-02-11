'use strict';

import template from './group-details.html';
//import './group-details.scss';

export class GroupDetailsController {
  constructor(GroupService, $stateParams) {
    this._GroupService = GroupService;
    this.page = 1;
    this.group = {
      id: $stateParams.groupId,
      posts: []
    };
  }

  $onInit() {
    // Get posts
    this._GroupService
      .posts( { groupId: this.group.id, page: this.page } )
      .then( (res) => {
        this.group.posts = res.data.posts;
        this.group.name = res.data.group.name;
      })

    // Get groups
    this._GroupService
      .all()
      .then( (res) => this.groups = res.data );
  }
}

GroupDetailsController.$inject = ['GroupService', '$stateParams'];

let groupDetailsComponent = {
  bindings: {},
  template: template,
  controller: GroupDetailsController
}

export default groupDetailsComponent;