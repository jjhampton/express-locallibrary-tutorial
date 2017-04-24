class BooksService {
    
    constructor($http) {
        this.$http = $http;
    }

    getBooks() {
        return this.$http.get('/api/books');
    }
}

angular.module('app').service('booksService', BooksService);