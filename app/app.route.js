(function () {
    "use strict";

    angular
        .module('myApp')
        .config(routes);


    function routes($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/public/search');

        $stateProvider

            .state('public',{
                abstract : true,
                url : "/public",
                templateUrl : 'templates/default.tepmlates.view.html'

            })
            .state('public.search', {
                url : '/search',
                views : {
                    content : {
                        component : 'searchArtist'
                    }

                  }
            })

            .state('public.profil',{
                abstract : true,
                url : "/public",
                template : 'profil'

            })

            .state('public.favortie',{
                abstract : true,
                url : "/public",
                template : 'favourite'

            })

            .state('public.settings',{
                abstract : true,
                url : "/public",
                template : 'settings'

            })

    }
})();