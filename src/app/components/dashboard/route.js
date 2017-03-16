/**
 * Created by yong on 2017/3/16.
 */
(function() {
    'use strict';

    angular
        .module('ngDemo')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.dashboard', {
                url: '/dashboard',
                abstract: true,
                templateUrl: 'app/components/dashboard/layout.html',
            })
            .state('app.dashboard.list', {
                url: '/list',
                templateUrl: 'app/components/dashboard/list.html',
                controller: 'DashboardListCtrl as vm'
            });

    }

})();
