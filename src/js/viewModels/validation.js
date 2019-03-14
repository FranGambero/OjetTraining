require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojfilmstrip'],
    function (oj, ko, $) {
        function ViewModel() {
            var self = this;

            self.chemicals = [
                { name: 'Hydrogen' },
                { name: 'Helium' },
                { name: 'Lithium' },
                { name: 'Beryllium' }
            ];
        }
    }
);