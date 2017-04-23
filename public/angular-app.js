(function() {
    angular.module('app', ['ngRoute'])
    .config(config)
    .run();

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {

        // routing
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        // foo
        $routeProvider
            .when("/foo", {
                template: '<foo-bar></foo-bar>'
            });

        // default
        $routeProvider
            .when("/", {
                template: 'Index...'
            })
    }

})();

(function() {

	angular.module('app').directive('fooBar', Directive);

	function Directive() {
		return {
            restrict: 'E',
			controller: Controller,
            template: '<div>{{text}}</div>',
		}
	}

    Controller.$inject = ['$scope'];

	function Controller($scope) {
        $scope.text = 'HELLO'; 
	}

})();



    
