'use strict';

import angular from 'angular';

export default angular
  .module('app.filters', [])
  .filter('getTitleFromMessage', function() {
    return function(message) {
      return message.slice(0, message.indexOf("\n"));
    }
  });
