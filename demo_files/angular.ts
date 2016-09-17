var $scope = {todo, $watch};


$scope.todo = {
  title: 'Welcome to Angular NYC!'
};


this._changeDetectors.forEach(function (detector) { return detector.detectChanges(); });
if (this.isDevMode()) {
  this._changeDetectors.forEach(function (detector) { return detector.checkNoChanges(); });
}


$scope.$watch('todo.title', function (newValue, oldValue) {
    //do something with newValue here
});
