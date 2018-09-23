const CarSearch = function() {
  return {
    controller: function($scope, $element) {
      $scope.opts = Database.getVehiclesIndex(); // data decoupled from the component
      $scope.$on('carcalcselect.change', (evt, id)=> $scope.vehicle = Database.getVehicle(id));
    },
    template: /* html */ `
      <div class="carcalc-carsearch-module row">
        <div class="col-12">
          <carcalcselect></carcalcselect>
        </div>
        <div class="col-12 col-md-6">
          <h2>{{ vehicle.name }}</h2>
        </div>
        <div class="col-12 col-md-6">
          <img src="./images/{{ vehicle.image }}" />
        </div>
      </div>
    `,
  };
};
