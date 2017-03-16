/**
 * Created by yong on 2017/3/16.
 */
(function () {

    'use strict';

    angular
        .module('ngDemo')
        .controller('DashboardListCtrl', Controller);

    /** @ngInject */

    function Controller($scope) {
        var vm = this;

        return init();

        function init() {
            console.log($scope);
        }
    }
})();
