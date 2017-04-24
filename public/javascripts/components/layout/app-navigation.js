class AppNavigationController {}

const AppNavigationComponent = {
    restrict: 'E',
    controller: AppNavigationController,
    templateUrl: '/layout/app-navigation.html'
};

angular.module('app').component('appNavigation', AppNavigationComponent);