'use strict';

(function() {
  var query = require('api/query');
  var filter = require('api/filter');
  angular
    .module('caApp')
    .factory('APIService', [
      '$http',
      '$q',
      apiService
    ])
    function apiService($http, $q) {
      function getMedias() {
        return query.getMedias().then(function(docs) {
          return filter.formatMedias(docs);
        });
      }
      return {
        getMedias: getMedias
      };

    }

})();
