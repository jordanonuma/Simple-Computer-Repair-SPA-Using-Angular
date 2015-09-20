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

app.controller('MainController',['$scope',function($scope){
  $scope.person = 'Soluciones Informáticas';
  console.log('$scope');
  
}]);

app.controller('ServicesController',['$scope','$http',function($scope, $http){
  $http.get('services.json').then(function(response){
    console.log(response);
  });
}]);

app.controller('ContactController',['$scope',function($scope){

}]);
