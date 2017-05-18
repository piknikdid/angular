angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'src/app/template/product-detail.html',
    controller: ['$http', '$routeParams','$scope', 'localStorageService',
      function ProductDetailController($http, $routeParams, $scope, localStorageService ) {
        var self = this



        $http.get('src/app/data/products.json').then(function(response){
          self.products = response.data;
          $scope.id = $routeParams.productId

          for (var i = 0; i < self.products.length; i++) {
            if (self.products[i].id == $scope.id) {
              localStorageService.set($scope.id, self.products[i])
            }
          }
          console.log(localStorageService.get($scope.id));
          self.product  = localStorageService.get($scope.id)


        });


        }]
      });
