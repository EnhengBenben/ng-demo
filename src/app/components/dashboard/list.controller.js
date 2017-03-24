/**
 * Created by yong on 2017/3/16.
 */
(function () {

    'use strict';

    angular
        .module('ngDemo')
        .controller('DashboardListCtrl', Controller)
        .factory("IssueService", ["$resource", function($resource) {
        return $resource("https://api.github.com/repos/:username/:repo/issues", {
            state: "open"
        }, {
            query: {
                method: "GET",
                isArray: true
            }
        });
    }]);

    /** @ngInject */

    function Controller($scope, webDevTec, NgTableParams, IssueService, DashboardService, $localStorage) {
        var vm = this;
        vm.remove = remove;
        vm.pageCount = [];
        vm.pageList = {
            currentPage: 1
        };
        //$localStorage.token = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMRUFNTyIsImV4cCI6MTQ5MDc2Nzg4OCwiaWF0IjoxNDkwMTYzMDg4LCJ1c2VybmFtZSI6Im9tc3Rlc3QifQ.2od7SjqhOIE0g-s6y8H0ecpGJ1StzMB1OACQnsyjFTk';
        vm.currentPage = currentPage;
        return init();

        function init() {
            DashboardService
                .publickey({id: 1})
                .then(function (res) {
                   vm.publicId = res.data;
                   var data = angular.copy(vm.publicId);
                    var key = RSAUtils.getKeyPair(res.data.exponent, '', res.data.modulus);
                   data['name'] = 'omstest';
                   data['pwd'] = RSAUtils.encryptedString(key, 'celloud');
                   DashboardService
                       .login(data)
                       .then(function (res2) {
                        $localStorage.token = res2.data.token;
                        console.log($localStorage);
                       })
                });
            


            for(var i=1;i<99;i++){
                vm.pageCount.push(i);
            }
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
            //vm.lists = webDevTec.getTec();
            vm.lists = [];
            vm.tableParams = new NgTableParams({
                sorting: { number: "asc" }
            }, {
                //dataset: vm.lists,
               // page: 1,            // show first page
                //count: 10,
                getData: function(params) {
                    return IssueService.query({
                        page: params.page(),
                        per_page: params.count(),

                        state: 'all',
                        username: 'esvit',
                        repo: 'ng-table'
                    }, function(data, headersGetter) {
                        var headers = headersGetter(),
                            pages = headers['link'].split(', '),
                            totalPages = 1;

                        // get total pages count
                        angular.forEach(pages, function(page) {
                            var parts = page.split(' rel=');
                            if (parts[1] == '"last"') {
                                totalPages = parseInt(parts[0].match(/page=(\d+)/)[1], 10);
                            }
                            if (totalPages == 1 && parts[1] == '"prev"') { // if last page
                                totalPages = parseInt(parts[0].match(/page=(\d+)/)[1], 10) + 1;
                            }
                        });
                        params.total(totalPages * params.count());
                        return data;
                    }).$promise;
                }

            });
        }

        function remove(id) {
            for (var i = 0; i < vm.lists.length; i++) {
                if(vm.lists[i].id === id){
                    vm.lists.splice(i,1);
                    break;
                }
            }
        }

        function currentPage(index) {
            vm.pageList.currentPage = index;
            DashboardService
                .bigcompanys()
                .then(function (res) {

                })
        }
    }
})();
