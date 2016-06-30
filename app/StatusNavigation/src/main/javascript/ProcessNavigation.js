'use strict';

(function (angular){
    	
	var ProcessNavigationCtrl = function () {
		var ctrl = this;

		 var cssClasses = {
                	default: '',
                	active: 'mnd-element-active',
                	done: 'mnd-element-done',
                	disabled: 'mnd-element-disabled'
            	};

		ctrl.getClass = function (real_index) {
			var index = real_index + 1,
			    result = cssClasses.default;
			if (index === ctrl.config.active) {
			    result = cssClasses.active;
			} else if (index < ctrl.config.active) {
			    result = cssClasses.done;
			} else if (ctrl.config.disabled.indexOf(index) !== -1) {
			    result = cssClasses.disabled;
			}
			return result;
            	};
	};

	var ProcessNavigationConfig = {
		template: 
			 '<div class="mnd-status-navigation">' +
        			'<div class="mnd-navigation-icon-bar"><ul><li ng-repeat="element in $ctrl.config.elements" ng-class="$ctrl.getClass($index)"><div class="mnd-number-icon">{{element.icon}}</div></li></ul></div>' +
        			'<div class="mnd-navigation-text-bar"><ul><li ng-repeat="element in $ctrl.config.elements" ng-class="$ctrl.getClass($index)">{{element.text}}</li></ul></div>' +
        		'</div>',
		bindings: {
			config: '='
		},
		controller: ProcessNavigationCtrl
	};

	var StatusHandlerConfig = function(){
		var that = this;
					
		var init = function(config) {
			that.config = config;
			console.log(that.config);
		};
		var forward = function() {
			if(that.config.active < that.config.elements.length && that.config.disabled.indexOf(that.config.active + 1) === -1) {
				that.config.active++;
			}
		};
		var backward = function() {
			if(that.config.active > 1 && that.config.disabled.indexOf(that.config.active - 1) === -1) {
				that.config.active--;
			}
    		};

		that.init = init;
		that.forward = forward;
		that.backward = backward;
	};

	angular.module('ProcessNavigation', [])
		.component('mndProcessNavigation',ProcessNavigationConfig)
		.service('mndProcessNavigationHandler', StatusHandlerConfig);
})(angular);
