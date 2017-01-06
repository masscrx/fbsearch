import angular from 'angular';

import GroupService from './group.service';

export default angular
  .module('app.services', [])
  .service('GroupService', GroupService);
