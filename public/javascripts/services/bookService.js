class BookService {
    
    constructor($http) {
        this.$http = $http;
    }

    getBookDetail(id) {
        return this.$http.get(`/api/books/${id}`);
    }

    getBookInstanceDetail(id) {
        return this.$http.get(`/api/bookinstances/${id}`);
    }

}

angular.module('app').service('bookService', BookService);