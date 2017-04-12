(function () {
    "use strict"
    angular
        .module('myApp')
        .config(appConfig)


    function appConfig(RestangularProvider) {
        RestangularProvider.setBaseUrl('https://api.spotify.com/');
    }
})();