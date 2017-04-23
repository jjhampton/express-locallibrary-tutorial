class RecordsCountsController {
    $onInit() {
      this.count = 28;
    }
}

const RecordsCountsComponent = {
    restrict: 'E',
    controller: RecordsCountsController,
    templateUrl: '/records/records-counts.html'
};

angular.module('app').component('recordsCounts', RecordsCountsComponent);