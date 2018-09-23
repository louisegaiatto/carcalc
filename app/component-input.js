const Input = function() {
  return {
    controller: function($scope, $element) {
      $scope.content;
      $scope.change = ()=> $scope.$broadcast('carcalcinput.change', $scope.content);
    },
    template: /* html */ `
    <div>
      <input ng-model="content" class="form-control" ng-change="change()">
    </div>
    `,
  };
};
