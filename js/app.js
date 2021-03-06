var siteApp = angular.module('siteApp', ['ngRoute']);

var TEST_MODE = window.location.hostname === "localhost";
var API_HOST = TEST_MODE ? "http://localhost:3000" : "https://api.alphaknights.club";

siteApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

siteApp.filter('moment', function(){
  return function(date){
    return moment(date).fromNow()
  }
})

socket = undefined; // for now...
mentors = [ ];
members = [ ];

$.getJSON(API_HOST + "/mentors.json").then(res => {
  mentors = res;
});

$.getJSON(API_HOST + "/members.json").then(res => {
  members = res;
});

siteApp.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: "/views/welcome.html",
      controller: "mainController"
    })
    .when('/mentors', {
      templateUrl: "views/mentors.html",
      controller: "mentorsController"
    })
    .when('/live', {
      templateUrl: "views/live.html",
      controller: "liveController"
    })
    .when('/congratulations', {
      templateUrl: "views/allstar.html",
      controller: "allstarController"
    })
    .when('/team', {
      templateUrl: "views/team.html",
      controller: "teamController"
    })
    .when('/houston', {
      templateUrl: "views/houston.html",
      controller: "houstonController"
    })
    .when('/mailchimp', {
      templateUrl: "views/EmailList.html",
      controller: "emailListContorler"
    })
    .otherwise({
      redirectTo: '/'
    });

  // $locationProvider.html5Mode(true);
});

var pageid = Math.random().toString(36).substring(7);
