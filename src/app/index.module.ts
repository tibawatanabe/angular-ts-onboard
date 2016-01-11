/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.controller.ts" />

module angularTsOnboard {
  'use strict';

  angular.module('angularTsOnboard', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
    .controller('MainController', MainController)
    .controller('NavbarController', NavbarController)

  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  })
;
}
