'use strict';
(function() {
  angular
    .module('caApp')
    .controller('HomeCtrl', [
      '$scope',
      'Medias',
      homeCtrl
    ])

    function homeCtrl($scope, Medias) {
      $scope.medias = Medias;
      // console.log(Medias)
      $scope.current_author = $scope.medias[0].author;
      console.log($scope.current_author)

    }

})();
