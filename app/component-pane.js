const Pane = function() {
  return {
    require: '^carcalctabs',
    restrict: 'E',
    transclude: true,
    scope: { title: '@' },
    link: function(scope, element, attrs, tabsController) {
      tabsController.addPane(scope);
    },
    template: /* html */ `
      <div class="tab-pane" ng-class="{active: selected}" ng-transclude></div>
    `,
    replace: true
  };
};
