class AppConfig {
    constructor ($routeProvider, $locationProvider) {

        // routing
        $locationProvider.html5Mode(true);

        // authors
        $routeProvider
            .when("/authors", {
                template: '<author-list></author-list>'
            });

        // books
        $routeProvider
            .when("/books", {
                template: '<book-list></book-list>'
            });
        $routeProvider
            .when("/books/:id", {
                template: '<book-detail></book-detail>'
            });

        // book instances
        $routeProvider
            .when("/bookinstances", {
                template: '<book-instance-list></book-instance-list>'
            });

        $routeProvider
            .when("/bookinstances/:id", {
                template: '<book-instance-detail></book-instance-detail>'
            });

        // genres
        $routeProvider
            .when("/genres", {
                template: '<genre-list></genre-list>'
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





    
