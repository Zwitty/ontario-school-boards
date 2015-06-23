(function(){
  'use strict'
  var app = angular.module('schoolData', []);

  app.directive("visControls", function(){
    return {
      restrict: 'E',
      templateUrl: "app/partials/vis-controls.html"
    };
  });
})();
