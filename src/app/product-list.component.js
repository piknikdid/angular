angular.module('productList').component('productList', {
    templateUrl: 'src/app/template/product-list.html',
    controller: ['$http', '$routeParams', 'localStorageService',
        function ProductListController($http, $routeParams, localStorageService) {
            var vm = this;

            if (localStorageService.keys().length <= 0) {
                angular.forEach(products, function (product, key) {
                    localStorageService.set('product_' + product.id, product);
                });
            }

            vm.products = [];

            angular.forEach(localStorageService.keys(), function (key) {
                if (key.includes('product_')) {
                    vm.products.push(localStorageService.get(key));
                }
            });

            vm.productRows = [];

            var row = [];
            angular.forEach(vm.products, function(product, key) {
                row.push(product);

                if (row.length == 4) {
                    vm.productRows.push(row);
                    row = [];
                }
            });
            vm.productRows.push(row);
        }
    ]
});
