define(['ojs/ojcore', 'knockout', 'jquery', 'factories/CountryFactory',
    'ojs/ojtable', 'ojs/ojcollectiontabledatasource'],
    function (oj, ko, $, CountryFactory) {
        var viewModel = {
            countryCollection: CountryFactory.createCountryCollection(),
            datasource: ko.observable(),
            // Called each time the view is shown to the user:
            initialize: function () {
                this.datasource(new oj.CollectionTableDataSource(this.countryCollection));
                this.countryCollection.fetch();
            }
        };
        return viewModel;
    }
);