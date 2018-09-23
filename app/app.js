angular
  .module('components', [])
  .directive('carcalctabs', Tabs)
  .directive('carcalcpane', Pane)
  .directive('carcalcselect', Select)
  .directive('carcalcinput', Input);

angular
  .module('app', ['components'])
  .directive('carsearchmodule', CarSearch)
  .directive('pricesearchmodule', PriceSearch);

