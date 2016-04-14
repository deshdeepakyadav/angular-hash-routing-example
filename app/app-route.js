var myDataApp = angular.module('dataApp',['ngRoute','showDataCtrl','addCtrl','updateCtrl','removeCtrl']);
	
	myDataApp.config(['$routeProvider',function($routeProvider){
		  $routeProvider.
				when('/',{
				templateUrl: 'partial/list.html',
				controller: 'showDataController'				
				}).
				when('/add',{
				templateUrl: 'partial/add.html',
				controller: 'addController'				
				}).
				when('/modify',{
				templateUrl: 'partial/modify.html',
				controller: 'updateController'				
				}).
				when('/delete',{
				templateUrl: 'partial/delete.html',
				controller: 'removeController'				
				}).
				otherwise({redirectTo: '/'});

	}]);