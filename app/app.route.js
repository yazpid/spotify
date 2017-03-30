(function () {
    "use strict"

    angular
        .module('myApp')
        .config(routes);


    function routes($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/public/login');

        $stateProvider

            .state('public',{
                abstract : true,
                url : "/public",
                templateUrl : 'templates/default.tepmlates.view.html'
            })

    }
})();