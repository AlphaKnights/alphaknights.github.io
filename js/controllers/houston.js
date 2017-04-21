siteApp.controller('houstonController', function($scope, $http){
  $scope.matches = [ ]

  function getMatches(){
    $.getJSON(API_HOST + "/matches").then(res => {
      $scope.matches = [ ]

      res = res.sort((a, b) => {
        return a.match_number - b.match_number
      })

      res.forEach(match => {
        var akAlliance = match.alliances.blue.teams.indexOf("frc6695") !== -1 ? "blue" : "red"

        $scope.matches.push({
          match_number: match.match_number,
          score_breakdown: match.score_breakdown,
          akAlliance,
          alliances: match.alliances,
          akWin: match.score_breakdown ? (match.alliances[akAlliance].score > match.alliances[akAlliance === "blue" ? "red" : "blue"].score ? true : false) : false
        })
      })

      $scope.$apply()
    })
  }

  getMatches()
  setInterval(getMatches, 30000)

  $scope.bodyExtraClasses = "full-height"
  $scope.contentExtraClasses = "full-height"
})