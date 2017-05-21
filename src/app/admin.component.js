angular.module('admin').component('admin', {
    templateUrl: 'src/app/template/admin.html',
    controller: ['$routeParams', 'localStorageService', '$route',
        function AdminController($routeParams, localStorageService, $route) {
            var vm = this;
            vm.products = [];

            angular.forEach(localStorageService.keys(), function (key) {
                if (key.includes('product_')) {
                    vm.products.push(localStorageService.get(key));
                }
            });


            vm.deleteProduct = function(id) {
                if (confirm('Are you sure you want to delete this product?')) {
                    $("#product_" + id).remove();
                    localStorageService.remove('product_' + id);
                    angular.forEach(vm.products, function (product, key) {
                        if (id == product.id) {
                            delete vm.products[key];
                            $route.reload();
                        }
                    });
                }
            };

            vm.editProductModal = function(id) {
                vm.currentProduct = localStorageService.get('product_' + id);
                $('#myModalLabel').html('Edit Product');
                $('#edit_product_modal').modal('show');

            };

            vm.newProductModal = function(id) {
                vm.currentProduct = {};
                $('#myModalLabel').html('New Product');
                $('#edit_product_modal').modal('show');
            }

            vm.saveProduct = function() {
                if (typeof vm.currentProduct.id == 'undefined') {
                    var newId = 0;

                    angular.forEach(localStorageService.keys(), function (key) {
                        if (key.includes('product_')) {
                            if (localStorageService.get(key).id >= newId) {
                                newId = localStorageService.get(key).id + 1;

                            };
                        }
                    });

                    vm.currentProduct.id = newId;

                    vm.products.push(vm.currentProduct);

                }

                localStorageService.set('product_' + vm.currentProduct.id, vm.currentProduct);
                $route.reload();
                $('#edit_product_modal').modal('hide');

            }
        }
    ]
});
