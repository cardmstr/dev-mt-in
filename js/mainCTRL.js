angular.module('devMtnApp').controller('mainCTRL', function($scope, mainSVC){

  var pages = ['triangles','view','find','update'];
  $scope.loggedIn = false;
  $scope.triangles = true;

  $scope.you = mainSVC.getYou();
  $scope.viewUser = $scope.you;

  $scope.logIn = function(name,tagline,url,bio){
    mainSVC.logIn(name,tagline,url,bio);
    $scope.loggedIn = !$scope.loggedIn;
  }

  $scope.users = mainSVC.getUsers();

  $scope.togglePage = function(displayView){
    pages.forEach(function(page){
      if(page === displayView){
        $scope[page] = true;
      } else {
        $scope[page] = false;
      }
    })
  }

  $scope.getUser = function(userID){
    var user = mainSVC.getUser(userID);
    if(user){
        $scope.viewUser = mainSVC.getUser(userID);
    }
  }

})
