angular.
  module('productList').
  component('productList', {
    templateUrl: 'src/app/template/product-list.html',
    controller: ['$http', '$routeParams',
      function ProductListController($http, $routeParams) {
        var self = this;
        $http.get('src/app/data/products.json').then(function(response){
          self.products = response.data;
        });
      }
    ]
  });
