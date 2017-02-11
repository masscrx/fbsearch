'use strict';

import template from './group-details.html';
//import './group-details.scss';

export class GroupDetailsController {
  constructor(GroupService, $stateParams, ngProgressFactory) {
    this._GroupService = GroupService;
    this.progressbar = ngProgressFactory.createInstance();
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

  updatePosts(group) {
    console.log('group', group);
    
    this.progressbar.setParent(document.getElementById('group_link'));
    this.progressbar.start();

    this._GroupService
      .updatePosts({groupId: group.id})
      .then( (res) => {
        this.group.posts = res.data;
        this.progressbar.setColor('#5ff442');
        this.progressbar.complete();
      })
  }  
}

GroupDetailsController.$inject = ['GroupService', '$stateParams', 'ngProgressFactory'];

let groupDetailsComponent = {
  bindings: {},
  template: template,
  controller: GroupDetailsController
}

export default groupDetailsComponent;