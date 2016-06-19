'use strict';

/**
 * Moondancer83's Status navigation component
 *
 * Creating a list of icon and text pairs representing some flow.
 * Each step has a status indicated by style.
 * Default statuses:
 *  - unreached (normal)
 *  - done
 *  - disabled
 */
(function (angular) {
    angular.module('StatusNavigation', [])
        .directive('mndStatusNavigation', [function () {
            var config;
            var cssClasses = {
                default: '',
                active: 'mnd-element-active',
                done: 'mnd-element-done',
                disabled: 'mnd-element-disabled'
            };
            var getClass = function (real_index) {
                var index = real_index + 1,
                    result = cssClasses.default;
                if (index === config.active) {
                    result = cssClasses.active;
                } else if (index < config.active) {
                    result = cssClasses.done;
                } else if (config.disabled.indexOf(index) !== -1) {
                    result = cssClasses.disabled;
                }
                return result;
            };
            var forward = function() {
                if(config.active < config.elements.length && config.disabled.indexOf(config.active + 1) === -1) {
                    config.active++;
                }
            };
            var backward = function() {
                if(config.active > 1 && config.disabled.indexOf(config.active - 1) === -1) {
                    config.active--;
                }
            };

            return {
                restrict: 'AE',
                scope: {
                    config: '='
                },
                template: '<div class="mnd-status-navigation">' +
                '<div class="mnd-navigation-icon-bar"><ul><li ng-repeat="element in config.elements" ng-class="getClass($index)"><div class="mnd-number-icon">{{element.icon}}</div></li></ul></div>' +
                '<div class="mnd-navigation-text-bar"><ul><li ng-repeat="element in config.elements" ng-class="getClass($index)">{{element.text}}</li></ul></div>' +
                '</div>',
                link: function (scope) {
                    config = scope.config;
                    scope.getClass = getClass;
                    scope.$on("navigation-forward", function () {
                        forward();
                    });
                    scope.$on("navigation-backward", function () {
                        backward();
                    });
                }
            };
        }]);
})(angular);