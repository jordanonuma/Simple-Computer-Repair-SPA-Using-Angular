var app = angular.module("computer",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider.
    when('/main',{
      templateUrl: 'main.html',
      controller:'MainController'
    }).
    when('/about',{
      templateUrl: 'about.html',
      controller:'MainController'
    }).
    when('/services',{
      templateUrl: 'services.html',
      controller:'ServicesController'
    }).
    when('/contact',{
      templateUrl: 'contact.html',
      controller:'ContactController'
    }).
    otherwise({redirectTo:'/main'});
}]);

app.controller('MainController',['$scope','$http',function($scope, $http){
  $scope.person = 'Soluciones Informáticas';
  console.log('$scope');
  
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
  
  
}]);

app.controller('ServicesController',['$scope','$http',function($scope, $http){
  $http.get('services.json').then(function(response){
    console.log(response.data);
    $scope.services = response.data;
  });
}]);

app.controller('ContactController',['$scope','$http',function($scope, $http){
  $http.get('locations.json').then(function(response){
    $scope.locations = response.data;
  });
}]);
