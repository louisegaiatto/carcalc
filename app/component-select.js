const Select = function() {
  return {
    controller: function($scope, $element) {
      // using events to decouple
      $scope.selection;
      $scope.change = ()=> $scope.$broadcast('carcalcselect.change', $scope.selection);
    },
    template: /* html */ `
    <div>
      <select ng-model="selection" ng-change="change()">
        <option value="" disabled selected>Selecione um carro</option>
        <option ng-repeat="opt in opts" ng-value="opt">{{ opt }}</option>
      </select>
    </div>
    `,
  };
};
