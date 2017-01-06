// Core
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';

// Components
import Common from './common/common';
import Components from './components/components'

// Styles
import 'bootstrap/dist/css/bootstrap.css'

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name
])

.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
  "ngInject";

  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider

    .state('groups', {
      url: '/',
      template: 'Groups page',
      controller: function() { return console.log('test')}
    });

    // Default page for the router
   $urlRouterProvider.otherwise('/groups');   
})

.component('app', AppComponent);