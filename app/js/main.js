(function() {
  var ghostChatApp;

  ghostChatApp = angular.module('ghostChatApp', []);

  ghostChatApp.controller('ListCtrl', function($scope) {
    return $scope.fn = [];
  });

}).call(this);
