// Core
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';

// Components
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';

// Styles
import 'bootstrap/dist/css/bootstrap.css'

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name,
  Services.name
])

.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
  "ngInject";

  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    
    .state({
      url: '/',
      name: 'app',
      views: {
        sidebar: 'sidebar'
      },
      resolve: {
        groups: function(GroupService) {
          return GroupService.all().then((res) => res.data);
        }
      }
    })

    .state({
      url: '/group/:groupId',
      name: 'group-details',
      resolve: {
        group: function($stateParams) {

        }
      }
    });

    // Default page for the router
   $urlRouterProvider.otherwise('/groups');   
})

.component('app', AppComponent);