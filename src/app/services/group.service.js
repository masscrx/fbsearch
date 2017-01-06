'use strict';

export default class GroupService {
  constructor($http) {
    'ngInject';
    this._$http = $http;
    this.api_url = '10.0.19.2:3000';
  }

  all() {
    return this._$http
      .get('http://10.0.19.2:3000/groups')
      .then((res) => res);
  }
}