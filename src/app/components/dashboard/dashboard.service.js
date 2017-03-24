/**
 * Created by yong on 2017/3/17.
 */
(function () {
    'use strict';

    angular
        .module('ngDemo')
        .service('DashboardService', Service);

    /* @ngInject */
    function Service(ENDPOINT, $http) {

        return {
            publickey: publickey,
            login: login,
            bigcompanys: bigcompanys
        };
        function publickey(params) {
            return $http({
                url: ENDPOINT + '/publickey',
                method: 'GET',
                params: params,
            })
        }

        function login(params) {
            return $http({
                url: ENDPOINT + '/login',
                method: 'POST',
                params: params,
            })
        }

        function bigcompanys() {
            return $http({
                url: ENDPOINT + '/bigcompanys',
                method: 'GET',
            })
        }
    }
})();
