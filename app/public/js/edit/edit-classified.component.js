(function () { 
  'use strict';
angular.module('app')
  .component('edit', {
    controller: controller,
    templateUrl: '/js/edit/edit-classified.template.html'
  });

  controller.$inject = ['$stateParams', '$state', 'classifiedService'];
    function controller($stateParams, $state, classifiedService) {
        const vm = this;

        vm.$onInit = onInit;
        vm.editAd = editAd;
        vm.deleteAd = deleteAd;

        function onInit() { 
          classifiedService.getById($stateParams.id).then(ad => vm.ad = ad);
         }


        function editAd() { 
          classifiedService.edit(vm.ad, $stateParams.id)
            .then(() => $state.go('classified'));
         }

        function deleteAd() { 
          classifiedService.del(vm.ad)
          .then(() => $state.go('classified'));
         }
    }
 }());