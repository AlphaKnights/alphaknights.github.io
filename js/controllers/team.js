siteApp.controller('teamController', function($scope, $location, $http){
  $scope.members = members;

  if(!members.length){
    $http.get(API_HOST + "/members.json").then(res => {
      members = res.data
      $scope.members = res.data
    })
  }
});