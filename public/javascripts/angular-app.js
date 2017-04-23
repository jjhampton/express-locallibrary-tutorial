(function() {
    angular.module('app', ['ngRoute'])
    .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {

        // routing
        $locationProvider.html5Mode(true);

        // foo
        $routeProvider
            .when("/foo", {
                template: '<foo-bar></foo-bar>'
            });

        // default
        $routeProvider
            .when("/", {
                template: `
                    <h1>MEAN Squad Library</h1>
                    <p>Welcome to <em>MEAN Squad Library</em>, a library web application built with the MEAN Stack.
                    <records-counts><records-counts>
                `
            })
    }
})();



    
