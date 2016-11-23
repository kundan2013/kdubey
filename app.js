var myApp = angular.module('LunchCheck',[]);

myApp.controller('LunchCheckController', ['$scope', function($scope) {
  $scope.input = '';
  $scope.check = function(){
	  var count;
	  if($scope.input == ''){
		 $scope.display = 'Please Enter the data'; 
	  }else{
	  var count = $scope.input.split(',');
	  if(count.length > 0 && count.length <=3){
		  $scope.display = 'Enjoy';
	  }else if(count.length > 3){
		  $scope.display = 'Too much!';
	  }
	  }
		  
  };
}]);