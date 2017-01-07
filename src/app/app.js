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

// Pages
import GroupsTemplate from './pages/groups.html';

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
      url: '/groups',
      name: 'groups',
      template: GroupsTemplate,
      resolve: {
        groups: function(GroupService) {
          return GroupService.all().then((res) => res.data);
        }
      }
    })

    .state({
      url: '/:groupId',
      name: 'groups.details',
      component: 'groupDetails'
    });

    // Default page for the router
   $urlRouterProvider.otherwise('/groups');   
})

.component('app', AppComponent);