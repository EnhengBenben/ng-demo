/**
 * Created by yong on 2017/3/16.
 */
(function () {

    'use strict';

    angular
        .module('ngDemo')
        .controller('DashboardListCtrl', Controller);

    /** @ngInject */

    function Controller($scope, webDevTec) {
        var vm = this;
        vm.remove = remove;

        return init();

        function init() {
            $scope.totalItems = 64;
            $scope.currentPage = 4;

            $scope.selectPage = function (pageNo) {
                $scope.currentPage = pageNo;
                console.log(pageNo);
            };
            $scope.$watch('bigCurrentPage', function (newValue, oldValue) {
                if (oldValue != newValue) {
                    console.log($scope.bigCurrentPage);
                }
            }, true);

            $scope.maxSize = 5;
            $scope.bigTotalItems = 175;
            $scope.bigCurrentPage = 1;
            vm.lists = webDevTec.getTec();
            console.log(vm.lists);
        }

        function remove(id) {
            for (var i = 0; i < vm.lists.length; i++) {
                if(vm.lists[i].id === id){
                    vm.lists.splice(i,1);
                    break;
                }
            }
        }
    }
})();
