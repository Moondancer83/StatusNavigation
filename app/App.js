'use strict';

(function(angular) {
    var app = angular.module('App', ['StatusNavigation']);

    app.controller('TestCtrl', ['$scope', function($scope) {
        var that = this;

        that.navigation = {
            elements: [
                {icon: '1', text: 'One'},
                {icon: '2', text: 'Two'},
                {icon: '3', text: 'Three'},
                {icon: '4', text: 'Four'}
            ],
            active: 2,
            disabled: [4]
        };
    }])
})(angular);
