'use strict';

(function(angular) {
    var app = angular.module('StatusNavigation');

    app.directive('statusNavigation', [function() {
        return {
            template: 'StatusNavigationDirective'
        };
    }]);
})(angular);