//markdown.module.js
;(function(){
  angular.module('angular-markdown', []);
})();

//markdown.md-loader.directive.js
;(function(){
  angular.module('angular-markdown').directive('mdLoader', directiveFactory);
  function directiveFactory(){
    return {
      scope: {
        url: '@',
        ret: '=',
        mdCallback: '&'
      },
      link: function(scope, el, attr, vm){
        vm.init(scope, el, attr);
      },
      controller: controller
    }
    controller.$inject = ['$compile', 'mdService'];
    function controller($compile, mdService){
      this.init = function(scope, el, attr){
        var url = scope.url;
        if(url){
          var promise = mdService.fetch(url).then(function(res){
            el.html(marked(res))
            $compile(el.contents())(scope);
          });
          scope.mdCallback({promise: promise});
        }
      }
    }
  }
})();

//markdown.md-fetch.sevice.js
;(function(){
  angular.module('angular-markdown').factory('mdService', factory);
  factory.$inject = ['$http', '$q'];
  function factory($http, $q){
    return {
      fetch: function(url){
        var d = $q.defer();
        $http.get(url, {cache:false}).
        success(function(res){
          d.resolve(res);
        });
        return d.promise;
      }
    }
  }
})();
