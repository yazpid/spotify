(function () {
    'use strict'

    angular
        .module('myApp')
        .service('artistService',['Restangular', service]);

    function service(Restangular) {

        var service = {
            search : search,
            topTrack : topTrack
        };

        function topTrack(id) {
            return Restangular
                    .all('v1/artists/' + id)
                    .customGET('top-tracks',{country : 'SE'});
        }

        function search(artist) {
            return Restangular
                    .all('v1/')
                    .customGET('search', {q : artist, type : 'artist', limit : 50});
        }
        return service;
    }
})();