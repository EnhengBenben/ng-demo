/**
 * Created by yong on 2017/3/17.
 */
(function () {

    'use strict';

    angular
        .module('ngDemo')
        .controller('DashboardCreateCtrl', Controller);

    /** @ngInject */

    function Controller($scope, $timeout) {
        var vm = this;
        vm.submit = submit;
        return init();

        function init() {
            console.log($scope);

        }

        function submit() {
        }
    }
})();
