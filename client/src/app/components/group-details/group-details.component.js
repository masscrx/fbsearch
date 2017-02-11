'use strict';

import template from './group-details.html';
//import './group-details.scss';

export class GroupDetailsController {
  constructor(GroupService) {
    GroupService.all().then( (res) => this.groups = res.data );
  }
}

GroupDetailsController.$inject = ['GroupService'];

let groupDetailsComponent = {
  bindings: {},
  template: template,
  controller: GroupDetailsController
}

export default groupDetailsComponent;