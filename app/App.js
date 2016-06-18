'use strict';

(function(angular) {
    var app = angular.module('App', []);

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

        that.getClass = function(real_index) {
            console.info(real_index);
            var index = real_index + 1,
                result = '';
            if (index === that.navigation.active) {
                result = 'active';
            } else if (index < that.navigation.active) {
                result = 'done';
            } else if(that.navigation.disabled.indexOf(index) !== -1) {
                result = 'disabled';
            }
            console.log(result);
            return result;
        }
    }])
})(angular);