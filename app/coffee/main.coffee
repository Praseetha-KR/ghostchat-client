ghostChatApp = angular.module 'ghostChatApp', ['ngRoute']

ghostChatApp.controller 'mainController', ($scope) ->
	$scope.message = 'Loading ....'