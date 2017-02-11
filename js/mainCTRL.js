angular.module('devMtnApp').controller('mainCTRL', function($scope, mainSVC){

  var pages = ['triangles','view','find','update'];
  $scope.loggedIn = false;
  $scope.triangles = true;

  $scope.logIn = function(){
    $scope.loggedIn = !$scope.loggedIn;
  }

  $scope.toggleUser = function(){

  }

  $scope.togglePage = function(displayView){
    pages.forEach(function(page){
      if(page === displayView){
        $scope[page] = true;
      } else {
        $scope[page] = false;
      }
    })
  }

})
