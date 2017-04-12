(function () {
    "use strict"


    angular
        .module('myApp')
        .component('menu',{
            templateUrl : "templates/menu/menu.template.html",
            controller: controller,
            bindings : {
                user : '<'
            }
        });

    controller.$inject = ['$scope','$mdSidenav'];

    function controller($scope,$mdSidenav) {

        var ctrl = this;
        ctrl.toggleSideNav = toggleSideNav;

        this.$onInit = function () {
            console.log(ctrl.user);
        }


        function toggleSideNav() {
            $mdSidenav('left').toggle();
        }

    }
})();