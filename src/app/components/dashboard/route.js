/**
 * Created by yong on 2017/3/16.
 */
(function () {
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
            })
            .state('app.dashboard.edit', {
                url: '/edit/:id',
                templateUrl: 'app/components/dashboard/edit.html',
                controller: 'DashboardEditCtrl as vm'
            })
            .state('app.dashboard.create', {
                url: '/create',
                templateUrl: 'app/components/dashboard/create.html',
                controller: 'DashboardCreateCtrl as vm'
            })
            .state('app.dashboard.show', {
                url: '/show/:id',
                templateUrl: 'app/components/dashboard/show.html',
                controller: 'DashboardShowCtrl as vm'
            });

    }

})();
