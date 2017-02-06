(function() {
  'use strict';

  angular
    .module('app')
    .service('classifiedService', service);

   service.$inject = ['$http', '$state', '$stateParams'];

    function service ($http, $state, $stateParams) { 
      this.all = all;
      this.create = create;
      this.getById = getById;
      this.edit = edit;
      this.del = del;
      
      function all() { 
        return $http.get('/api/classifieds')
          .then(response => response.data); 
       }

       function getById(id) { 
         return $http.get(`/api/classifieds/${id}`)
            .then(response => {
              const ad = response.data;
              return ad;
            });
        }

      function create(ad){
        return $http.post('api/classifieds', ad)
          .then(response => {
            response.data.ad = {};
            return response.data;
          });
      }

      function edit(ad, id) { 
        return $http.patch(`/api/classifieds/${id}`, ad)
          .then(response => {
            return response.data;
          });
       }

      function del() { 
        return $http.delete(`/api/classifieds/${$stateParams.id}`)
          .then(response =>{
            return response.data;
          });
       }
     }
}());
