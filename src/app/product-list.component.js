angular.
  module('productList').
  component('productList', {
    templateUrl: 'src/app/template/product-list.html',
    controller: ['$http', '$routeParams', 'localStorageService',
      function ProductListController($http, $routeParams, localStorageService) {
        var self = this;
        $http.get('src/app/data/products.json').then(function(response){
          self.products = response.data;
          for (var i = 0; i < self.products.length; i++) {
            localStorageService.set(i+1, self.products[i])
          }
          localStorageService.set('allData', self.products)          
        });
      }
    ]
  });
