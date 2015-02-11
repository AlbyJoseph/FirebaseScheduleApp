angular.module('scheduleApp').controller('HomeCtrl',function($scope, $firebase){

var ref = new window.Firebase("https://radiant-inferno-9864.firebaseio.com/days");  
  var fb = $firebase(ref);
  var syncObject = fb.$asObject();
  syncObject.$bindTo($scope, 'days');
  // function to set the default data
  $scope.reset = function() {    

    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });    

  };
  


});