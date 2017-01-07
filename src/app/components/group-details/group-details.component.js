'use strict';

import template from './group-details.html';

export class GroupDetailsController {
  constructor(GroupService, $stateParams) {
    'ngInject';
    console.log('Group details loaded');
    console.log($stateParams);
    this._GroupService = GroupService;
    this.group = { 
      id: $stateParams.groupId,
      posts: []
    };
  }

  $onInit() {
    this._GroupService.posts({ groupId: this.group.id }).then((res) => this.group.posts = res.data)
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