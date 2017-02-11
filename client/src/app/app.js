// Core
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Config from './config';

// Components
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

// Pages
import GroupPostsTemplate from './pages/group-posts.html';

// Filters
import Filters from './filters';

// Libs
import ngProgress from './lib/ng-progress';

angular.module('app', [
  uiRouter,
  ngProgress.name,
  Config.name,
  Common.name,
  Components.name,
  Services.name,
  Filters.name
])

.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
  "ngInject";

  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    
    .state({
      name: 'groups',
      url: '/groups',
      resolve: {
        groups: function(GroupService) {
          return GroupService.all().then((res) => res.data);
        }
      }
    })

    .state({
      name: 'groups.details',
      url: '/:groupId',
      template: GroupPostsTemplate,
    });

    // Default page for the router
   $urlRouterProvider.otherwise('/groups');   
})

.component('app', AppComponent);