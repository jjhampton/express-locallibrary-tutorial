(function() {

	angular.module('app').directive('recordsCounts', Directive);

	function Directive() {
		return {
            restrict: 'E',
			controller: Controller,
            templateUrl: '/records/records-counts.html',
		}
	}

    Controller.$inject = ['$scope'];

	function Controller($scope) {
        $scope.count = 11; 
	}

})();