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
                    <h1>Index</h1>
                    <a href="/foo">Foo Page</a>
                `
            })
    }
})();



    
