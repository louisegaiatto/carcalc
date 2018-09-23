const PriceSearch = function() {
  return {
    controller: function($scope, $element) {
      $scope.vehicles = [];
      $scope.price = 0;

      $scope.text = 'Por favor digite um numero no campo';
      $scope.validateValue = ()=> {
        $scope.text = 'Por favor digite um numero no campo';
        if ($scope.price > 1 && $scope.price < 100000000000) {
          $scope.text = 'Valor informado esta sendo verificado...';
          $scope.vehicles = Database.getVehicleByPrice($scope.price);
        } else if ($scope.price > 100000000000) {
          $scope.text = 'Valor informado invalido...';
        }
      }

      $scope.$on('carcalcinput.change', (evt, value)=> {
        $scope.price = value;
        $scope.validateValue();
      });
    },
    template: /* html */ `
      <div class="carcalc-pricesearch-module row">
        <div class="col-12 row">
          {{ text }}
        </div>
        <div class="col-12 row">
          <div class="col-10">
            <carcalcinput></carcalcinput>
          </div>
          <div class="col-1">
            <button class="btn btn-primary" ng-click="validateValue()">Pesquisar</button>
          </div>
        </div>
        <div class="col-12 row carcalc-pricesearch-module__vehicle" ng-repeat="vehicle in vehicles">
          <div class="col-12 col-md-6">
            <h2>{{ vehicle.name }}</h2>
          </div>
          <div class="col-12 col-md-6">
            <img src="./images/{{ vehicle.image }}" />
          </div>
        </div>
      </div>
    `,
  };
};
