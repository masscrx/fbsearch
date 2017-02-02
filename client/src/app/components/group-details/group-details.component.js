'use strict';

import template from './group-details.html';
import './group-details.scss';

export class GroupDetailsController {
  constructor(GroupService, $stateParams) {
    'ngInject';
    console.log('Group details loaded');
    console.log($stateParams);
    this._GroupService = GroupService;
    this.page = 1;
    this.group = {
      id: $stateParams.groupId,
      posts: []
    };
  }

  $onInit() {
    console.log('on init');
    this._GroupService
      .posts( { groupId: this.group.id, page: this.page } )
      .then( (res) => {
        this.group.posts = res.data.posts;
        this.group.name = res.data.group.name;
      })
  }
}

let groupDetailsComponent = {
  restrict: 'E',
  template: template,
  controller: GroupDetailsController,
  bindings: {

  }
}

export default groupDetailsComponent;