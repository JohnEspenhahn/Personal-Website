var hahnApp = angular.module('hahnApp', [ 'ngRoute', 'ui.bootstrap' ]);

hahnApp.run(["$rootScope", "$location", "$anchorScroll", function($rootScope, $location, $anchorScroll) {
    //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        if($location.hash()) $anchorScroll();
    });
}]);

hahnApp.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'mainController',
        activetab: 'home'
    }).when('/portfolio', {
        templateUrl: 'pages/portfolio.html',
        controller: 'mainController',
        activetab: 'portfolio'
    }).otherwise('/home')
});

hahnApp.controller('mainController', ['$scope', '$route', function ($scope, $route) {

    $scope.isCollapsed = true;
    $scope.$route = $route;

}]);