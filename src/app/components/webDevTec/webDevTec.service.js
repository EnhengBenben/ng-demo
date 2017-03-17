(function () {
    'use strict';

    angular
        .module('ngDemo')
        .service('webDevTec', webDevTec);

    /** @ngInject */
    function webDevTec() {
        var data = [
            {
                'name': 'AngularJS',
                'url': 'https://angularjs.org/',
                'description': 'HTML enhanced for web apps!',
                'logo': 'angular.png',
                'id': 0,
                'teacher': 'Mr Wang',
                'count': 200
            },
            {
                'id': 1,
                'teacher': 'Mr Yang',
                'count': 200,
                'name': 'BrowserSync',
                'url': 'http://browsersync.io/',
                'description': 'Time-saving synchronised browser testing.',
                'logo': 'browsersync.png'
            },
            {
                'id': 2,
                'teacher': 'Mr Huang',
                'count': 300,
                'name': 'GulpJS',
                'url': 'http://gulpjs.com/',
                'description': 'The streaming build system.',
                'logo': 'gulp.png'
            },
            {
                'id': 3,
                'teacher': 'Mr Wang',
                'count': 230,
                'name': 'Jasmine',
                'url': 'http://jasmine.github.io/',
                'description': 'Behavior-Driven JavaScript.',
                'logo': 'jasmine.png'
            },
            {
                'id': 4,
                'teacher': 'Mr Zhang',
                'count': 600,
                'name': 'Karma',
                'url': 'http://karma-runner.github.io/',
                'description': 'Spectacular Test Runner for JavaScript.',
                'logo': 'karma.png'
            },
            {
                'id': 5,
                'teacher': 'Mr Wang',
                'count': 700,
                'name': 'Protractor',
                'url': 'https://github.com/angular/protractor',
                'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
                'logo': 'protractor.png'
            },
            {
                'id': 6,
                'teacher': 'Mr Wang',
                'count': 280,
                'name': 'Angular Material Design',
                'url': 'https://material.angularjs.org/#/',
                'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
                'logo': 'angular-material.png'
            },
            {
                'id': 7,
                'teacher': 'Mr Wang',
                'count': 190,
                'name': 'Less',
                'url': 'http://lesscss.org/',
                'description': 'Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
                'logo': 'less.png'
            }
        ];

        this.getTec = getTec;

        function getTec() {
            return data;
        }
    }

})();
