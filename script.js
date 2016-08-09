angular.module('portfolioApp', ['ui.router']);

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        });

});
