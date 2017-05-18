angular.module('productApp').
config(['$locationProvider', '$routeProvider', 'localStorageServiceProvider',
    function config($locationProvider, $routeProvider, localStorageServiceProvider) {
      $locationProvider.hashPrefix('');
      localStorageServiceProvider.setPrefix('productApp');

      $routeProvider.
        when('/', {
          template: '<product-list></product-list>',
        }).

        when('/product/:productId', {
          template: '<product-detail></product-detail>'
        }).

        when('/Admin', {
          template: '<admin></admin>'
        }).

        otherwise('/');
    }
  ]);
