angular.module('productApp').
config(['$locationProvider', '$routeProvider', 'localStorageServiceProvider',
    function ($locationProvider, $routeProvider, localStorageServiceProvider) {

      //Set up routing
      $locationProvider.hashPrefix('');

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

        otherwise('/'); //TODO: ???


        //Set up LocalStorage
        localStorageServiceProvider.
          setPrefix('productApp').
          setStorageType('localStorage').
          setNotify(false, false);
    }
  ]);
