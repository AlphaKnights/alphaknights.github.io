siteApp.controller('houstonController', function($scope, $http){
  $scope.matches = [ ]

  function getMatches(){
    $.getJSON(API_HOST + "/matches").then(res => {
      $scope.matches = res.sort((a, b) => {
        return a.match_number - b.match_number
      })

      $scope.$apply()
    })
  }

  getMatches()
  setInterval(getMatches, 30000)

  $scope.bodyExtraClasses = "full-height"
  $scope.contentExtraClasses = "full-height"
})