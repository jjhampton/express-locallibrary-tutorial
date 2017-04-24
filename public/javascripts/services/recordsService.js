class RecordsService {
    
    constructor($http) {
        this.$http = $http;
    }

    getRecordCounts() {
        return this.$http.get('/api/recordCounts');
    }
}

angular.module('app').service('recordsService', RecordsService);