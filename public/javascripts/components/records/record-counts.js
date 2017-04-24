class RecordCountsController {
    constructor(recordsService) {
        this.recordsService = recordsService;
    }

    $onInit() {
      this.recordsService.getRecordCounts().then(result => {
        this.counts = result.data;
      });
    }
}

const RecordCountsComponent = {
    restrict: 'E',
    controller: RecordCountsController,
    templateUrl: '/records/record-counts.html'
};

angular.module('app').component('recordCounts', RecordCountsComponent);