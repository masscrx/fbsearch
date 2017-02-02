'use strict';

export default class GroupService {
  constructor($http, APP_CONFIG) {
    'ngInject';
    this._$http = $http;
    this.API_URL = APP_CONFIG.API_URL;
  }

  all() {
    return this._$http
      .get(this.API_URL + '/groups')
      .then((res) => res);
  }

  posts(options) {
    return this._$http({
      url: this.API_URL + '/groups/' + options.groupId,
      method: 'GET',
      params: {
        page: options.page
      }
    })
    .then((res) => res)
  }
}