app.controller('climateModalCtrl', function($scope, $rootScope, $modalInstance, items) {

  $scope.closeModal = function () {
  	$rootScope.gameBreak = false;
    $modalInstance.dismiss('cancel');
  };
 
});