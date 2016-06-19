'use strict';

(function(angular) {
    var app = angular.module('App', ['StatusNavigation']);

    app.controller('TestCtrl', [function() {
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

        that.forward = function() {
            that.navigation.active++;
            console.log(that.navigation.active);
        };
        that.backward = function() {
            that.navigation.active--;
        };
    }])
})(angular);