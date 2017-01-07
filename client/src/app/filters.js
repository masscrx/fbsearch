'use strict';

import angular from 'angular';

export default angular
  .module('app.filters', [])
  .filter('getTitleFromMessage', function() {
    return function(message) {
      return message ? message.slice(0, message.indexOf("\n")) : "None";
    }
  });
