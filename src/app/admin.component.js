angular.
  module('admin').
  component('admin', {
    templateUrl: 'src/app/template/admin.html',
    controller: ['$scope', '$routeParams','localStorageService', '$mdDialog',
      function AdminController($scope, $routeParams, localStorageService, $mdDialog) {
          $scope.products = localStorageService.get('allData');
          $scope.showPost = function(ev) {
            var confirm = $mdDIalog.prompt()
            .title('What would you name your dog?')
            .textContent('Bowser is a common name.')
            .placeholder('Dog name')
            .ariaLabel('Dog name')
            .initialValue('Buddy')
            .targetEvent(ev)
            .ok('Okay!')
            .cancel('I\'m a cat person');
          };
          $mdDialog.show(confirm).then(function(result) {
            $scope.status = 'You decided to name your dog ' + result + '.';
          })
      }
    ]
  });
