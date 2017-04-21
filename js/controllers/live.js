siteApp.controller('liveController', function($scope, $location, $http){
  $scope.updates = [ ]

  if(!socket) socket = io.connect("wss://live.alphaknights.club");

  socket.on("feed:items", items => {
    $scope.updates = items
    $scope.$apply()
  })

  socket.on("feed:newitem", item => {
    $scope.updates.push(item)
    $scope.$apply()
  })
});