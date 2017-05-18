class GenresService {
    
    constructor($http) {
        this.$http = $http;
    }

    getAllGenres() {
        return this.$http.get('/api/genres');
    }
}

angular.module('app').service('genresService', GenresService);