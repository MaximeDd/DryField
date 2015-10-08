app.controller('gameOverModalCtrl', function($scope, $modalInstance, items) {

  $scope.saveResult = function () {
   $modalInstance.close($scope.name);
  };

  $scope.closeModal = function () {
    $modalInstance.dismiss('cancel');
  };
 
});