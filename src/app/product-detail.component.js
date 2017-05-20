angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'src/app/template/product-detail.html',
    controller: ['$http', '$routeParams','$scope', 'localStorageService',
      function ProductDetailController($http, $routeParams, $scope, localStorageService ) {
          $scope.id = $routeParams.productId;
          $scope.product = localStorageService.get($scope.id)
        }]
      });
