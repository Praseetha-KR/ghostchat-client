ghostChatApp.config ($routeProvider) ->
    $routeProvider
        .when '/',
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
        .when '/images',
                templateUrl : 'pages/image_list.html',
                controller  : 'mainController'