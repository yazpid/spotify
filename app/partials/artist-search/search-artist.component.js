(function () {
    'use strict'


    angular
        .module('myApp')
        .component('searchArtist', {
            templateUrl : 'partials/artist-search/search-artist.view.html',
            controller : controller
        });


    controller.$inject = ['$scope','artistService', '$filter'];

    function controller($scope, artistService, $filter) {
        var ctrl = this;

        ctrl.searchResult = [];

        ctrl.searchArtist = searchArtist;
        ctrl.testRx = testRx;


        var button$ = new Rx.Observable.fromEvent(btn, 'click');




        this.$onInit = function () {

        };


        function testRx(artist) {


            button$.subscribe(
                function (e) {
                    console.log(artist +" Rx");
                },
                function (err) {
                    console.log(err)
                },
                function () {
                    console.log("Done");
                }
            );
        }


        function searchArtist(artist) {
            artistService.search(artist).then(
                function (data) {
                    ctrl.searchResult =  $filter('orderBy')(data.artists.items, 'popularity', true);
                    ctrl.searchResult.splice(4,ctrl.searchResult.length - 5);

                    _.forEach(ctrl.searchResult, function (item) {

                        artistService.topTrack(item.id).then(function (data) {
                            console.log(data);
                            item.tracks = [];

                            data.tracks = $filter('orderBy')(data.tracks, 'popularity', true);
                            for(var i = 0; i<5; i++)
                            {
                                item.tracks[i] = data.tracks[i];

                            }
                        })
                        console.log("ctrl.searchResult",ctrl.searchResult)
                    })

                }
            )


        }

    }
})();