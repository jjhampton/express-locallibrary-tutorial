(function() {

	angular.module('app').directive('fooBar', Directive);

	function Directive() {
		return {
            restrict: 'E',
			controller: Controller,
            templateUrl: '/foo-bar.html',
		}
	}

    Controller.$inject = ['$scope'];

	function Controller($scope) {
        $scope.text = 'HELLO'; 
	}

})();