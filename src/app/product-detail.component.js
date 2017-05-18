angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'src/app/template/product-detail.html',
    controller: ['$http', '$routeParams',
      function ProductDetailController($http, $routeParams, $scope) {

          $scope.productId = $routeParams.productId;
      }
    ]
  });
