class BooksService {
    
    constructor($http) {
        this.$http = $http;
    }

    getAllBooks() {
        return this.$http.get('/api/books');
    }

    getAllBookInstances() {
        return this.$http.get('/api/bookinstances');
    }
}

angular.module('app').service('booksService', BooksService);