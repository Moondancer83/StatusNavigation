'use strict';

(function(angular) {
    var app = angular.module('App', ['ProcessNavigation']);

    app.controller('TestCtrl', ['$scope', 'mndProcessNavigationHandler', function($scope, mndProcessNavigationHandler) {
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

	/**
	 * The following lines onlz needed for the component verion.
	 */
	function handlerInit() {
		mndProcessNavigationHandler.init(that.navigation);
	}
	that.navigation.next =  function () {
		mndProcessNavigationHandler.forward();
	};
	that.navigation.previous = function () {
		mndProcessNavigationHandler.backward();
	};

	handlerInit();
    }])
})(angular);
