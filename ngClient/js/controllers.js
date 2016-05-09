myApp.controller("HeaderCtrl", ['$scope', '$location', 'UserAuthFactory', 'AuthenticationFactory',
    function($scope, $location, UserAuthFactory,AuthenticationFactory) {


        $scope.isActive = function(route) {
            return route === $location.path();
        }
        $scope.logout = function() {
            UserAuthFactory.logout();
        }
    }
]);

myApp.controller("HomeCtrl", ['$scope',
  function($scope) {
    $scope.name = "Home Controller";
  }
]);

myApp.controller("Page1Ctrl", ['$scope',
  function($scope) {
    $scope.name = "Page1 Controller";
  }
]);

myApp.controller("Page2Ctrl", ['$scope',
  function($scope) {
    $scope.name = "Page2 Controller";
    // below data will be used by checkmark filter to show a ✓ or ✘ next to it
    $scope.list = ['yes', 'no', true, false, 1, 0];
  }
]);

/// snipp
myApp.controller("MembresCtrl", ['$scope', 'dataFactory',
    function($scope, dataFactory) {
        $scope.members = [];
        // Access the factory and get the latest products list
        dataFactory.getProducts().then(function(data) {
            $scope.products = data.data;
        });
    }
]);
