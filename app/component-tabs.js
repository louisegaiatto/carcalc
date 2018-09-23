const Tabs = function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function($scope, $element) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;

        if ($scope.show) {
          $scope.toggleMenu();
        }
      }

      this.addPane = function(pane) {
        if (panes.length == 0) $scope.select(pane);
        panes.push(pane);
      }

      // controls menu toggle
      $scope.collapsed = true;
      $scope.show = false;
      $scope.toggleMenu = ()=> {
        $scope.collapsed = !$scope.collapsed;
        $scope.show = !$scope.show;
      }

    },
    template: /* html */`
    <div>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">CarCalc</a>
        <button class="navbar-toggler" ng-class="{collapsed}" ng-click="toggleMenu()" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" ng-class="{show}" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" ng-repeat="pane in panes">
              <a class="nav-link" ng-click="select(pane)" ng-class="{active: pane.selected}" href="">{{ pane.title }}</a>
            </li>
          </ul>
        </div>
      </nav>

      <main role="main">
        <div class="jumbotron tab-content" ng-transclude>

        </div>
      </main>
    </div>
    `,
    replace: true
  };
};
