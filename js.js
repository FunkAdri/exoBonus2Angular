
  angular.module("ouiTest", [])
    .controller("ouiController", ["$scope", "$window", function($scope, $window) {
      $scope.oui = "J'avais dis : Ne cliquez pas";
      $scope.doAlert = function(oui) {
        $window.alert(oui);
      };
    }]);
