/**
 * Created by yong on 2017/3/17.
 */
(function () {

    'use strict';

    angular
        .module('ngDemo')
        .controller('DashboardShowCtrl', Controller);

    /** @ngInject */

    function Controller($scope) {
        var vm = this;

        return init();

        function init() {
            console.log($scope);
        }
    }
})();
