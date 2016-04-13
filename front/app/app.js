(function(angular) {
  'use strict';
angular.module('app', ['ngComponentRouter', 'ngResource' ,'ui.bootstrap'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

})(window.angular);