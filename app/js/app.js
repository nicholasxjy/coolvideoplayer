'use strict';
(function() {
  angular
    .module('caApp', [
      'ui.router'
    ])
    .run(runInit)
    .config(runConfig)

    function runInit() {
      var AV = require('avoscloud-sdk').AV;
      AV.initialize('kP606FlfJTpti6QxtCXzIuMt', 'Tw2PlmfCItqcgvGD4MlkTCuR');
    }

    function runConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'tpls/home.html',
          controller: 'HomeCtrl',
          resolve: {
            Medias: function(APIService) {
              return APIService.getMedias().then(function(medias) {
                return medias;
              })
            }
          }
        })
    }

})();
