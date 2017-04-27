class AuthorsService {
    
    constructor($http) {
        this.$http = $http;
    }

    getAllAuthors() {
        return this.$http.get('/api/authors');
    }
}

angular.module('app').service('authorsService', AuthorsService);