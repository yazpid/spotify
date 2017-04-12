(function () {
    "use strict";

    angular
        .module('myApp')
        .component('app',{
            templateUrl : 'app.view.html',
            controller : controller,
            controllerAs : '$rootCtrl'
        });

    controller.$inject = ['$scope','$mdSidenav'];

    function controller($scope,$mdSidenav) {

        var ctrl = this;

        ctrl.toggleSideNav = toggleSideNav;


        function toggleSideNav() {
            $mdSidenav('left').toggle();
        }
    }


})();