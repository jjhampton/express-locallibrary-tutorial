class AppConfig {
    constructor ($routeProvider, $locationProvider) {

        // routing
        $locationProvider.html5Mode(true);

        // books
        $routeProvider
            .when("/books", {
                template: '<book-list></book-list>'
            });

        // default
        $routeProvider
            .when("/", {
                template: '<record-counts></record-counts>'
            })
    }
    
}

angular.module('app', ['ngRoute'])
    .config(AppConfig);





    
