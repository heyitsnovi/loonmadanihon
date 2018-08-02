var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/tourist-spots", {
        templateUrl : "tourist-spots.html"
    })
    .when("/resto",{
         templateUrl : "resto.html"
    })
});