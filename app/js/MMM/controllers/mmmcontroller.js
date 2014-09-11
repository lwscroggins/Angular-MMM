'use strict'

module.exports = function(app) {
  app.controller('mmmController', function($scope, $http) {
    var numArray = [77, 80, 85, 85, 90, 100, 100, 100];
    document.getElementById("numbers").innerHTML = "The numbers are: " + numArray;

    $scope.mean = function() {
      var sum = numArray.reduce(function(a,b) {
        return a + b;
      });

      var mean = sum/numArray.length;
      document.getElementById("mean").innerHTML = mean;
    };

    $scope.median = function() {
      var j = 0;
      numArray.length % 2 !== 0 ? j = (numArray.length - 1) / 2 : j = numArray.length/2;
      var median = numArray[j];
      document.getElementById("median").innerHTML = median;
    };

    $scope.mode = function() {
      var counts = [];

      for (var i = 0; i < numArray.length; i++) {
        counts[numArray[i]] = (counts[numArray[i]] ? counts[numArray[i]] : 0) + 1;
      }

      var mode = 0;
      var modeNum = 0;

      counts.forEach(function(value, index){
        if (value >= modeNum) {
          mode = index;
          modeNum = value;
        };
      });
      document.getElementById("mode").innerHTML = mode;
    };
  });
};
