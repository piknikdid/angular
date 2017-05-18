angular.
  module('admin').
  component('admin', {
    templateUrl: 'src/app/template/admin.html',
    controller: ['$http', '$routeParams',
      function ProductListController($http, $routeParams) {
        var self = this;
        $http.get('src/app/data/products.json').then(function(response){
          self.products = response.data;
        });
        $http.post('src/app/data/products.json').then(function(response){
          self.products = response.data;
        });

      }
    ]
  });
