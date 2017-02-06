(function() {
    'use strict';
    angular.module('app')
        .component('appComponent', {
            templateUrl: '/js/app/app.template.html',
            controller: controller
        });
        
    // controller.$inject = ['$http'];

    function controller() {
        const vm = this;

        vm.$onInit = onInit;
        
        function onInit() {
          console.log("you're in onInit app.component");
        }
    }

}());