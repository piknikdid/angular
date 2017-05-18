angular.module('productApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('');

      $routeProvider.
        when('/', {
          template: '<product-list></product-list>',

        }).
        when('/product/:productId', {
          template: '<product-detail></product-detail>'
        }).
        otherwise('/');
    }
  ]);
