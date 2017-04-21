siteApp.controller('mentorsController', function($scope, $location, $http){
  $scope.mentors = mentors;

  if(!mentors.length){
    $http.get(API_HOST + "/mentors.json").then(res => {
      mentors = res.data
      $scope.mentors = res.data
    })
  }
});