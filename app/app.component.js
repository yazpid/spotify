(function () {
    "use strict";

    angular
        .module('myApp')
        .component('app',{
            templateUrl : 'app.view.html',
            controller : ['$scope', controller]
        });

    function controller($scope) {

    }


})();