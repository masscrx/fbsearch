'use strict';

import template from './group-details.html';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

//import './group-details.scss';

export class GroupDetailsController {
  constructor(GroupService, $stateParams) {
    this._GroupService = GroupService;
    this.showRefreshButton = true;
    this.page = 1;
    this.group = {
      id: $stateParams.groupId,
      posts: []
    };
  }

  $onInit() {
    // Get groups
    this._GroupService
      .all()
      .then( (res) => this.groups = res.data );
  }

  updatePosts(group) {    
    this.showRefreshButton = false;
    NProgress.configure({ parent: '#group_link' });
    NProgress.start();

    this._GroupService
      .updatePosts({groupId: group.id})
      .then( (res) => {
        console.log(res)
        this.group.posts = res.data.data;
        NProgress.done();
        this.showRefreshButton = true;
      })
  }

  loadPosts() {
    this._GroupService
      .posts( { groupId: this.group.id, page: this.page } )
      .then( (res) => {
        this.group.posts = this.group.posts.concat(res.data.posts);
      })
    this.page++   
  }  
}

GroupDetailsController.$inject = ['GroupService', '$stateParams'];

let groupDetailsComponent = {
  bindings: {},
  template: template,
  controller: GroupDetailsController
}

export default groupDetailsComponent;