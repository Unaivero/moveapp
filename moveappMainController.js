app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Push-ups-3-2.png',
      name: 'Pushups',
      count: 20
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Squats-2.png',
      name: 'Squats',
      count: 15
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Climbers-chin-up-2.png',
      name: 'Pullups',
      count: 10
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Rear-deltoid-row-1.png',
      name: 'Rows',
      count: 10
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Lunges-2-2.png',
      name: 'Lunges',
      count: 10
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Step-ups-2-801x1024.png',
      name: 'Step Ups',
      count: 10
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Decline-crunch-2.png',
      name: 'Sit Ups',
      count: 15
    }
  ];
  $scope.increase = function(index){
    $scope.exercises[index].count +=1;
  };

  $scope.decrease = function(index){
    $scope.exercises[index].count -=1;
  };


}]);