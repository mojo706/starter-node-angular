// public/js/NerdService.js
angular.module('NerdService', []).factory('Nerd', ['$http', function ($http) {
  return {
    // call to get all nerds
    get: function () {
      return $http.get('/api/nerds');
    },

    // these will work when more Api resourcesared defined on the Node side of things
    // call to POST and create a new nerd
    create: function (nerdData) {
      return $http.post('api/nerdData')
    },

    // call to DELETE  a nerd
    delete: function (id) {
      retun
    }
  }
}])