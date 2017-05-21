class BookService {
    
    constructor($http) {
        this.$http = $http;
    }

    getBookInstanceDetail(id) {
        return this.$http.get(`/api/bookinstances/${id}`);
    }

}

angular.module('app').service('bookService', BookService);