//app.module.js
;(function(){
	angular.
		module('app', ['ui.router', 'ngAnimate', 'angular-loading-bar', 'ngSanitize', 'angular-markdown', 'angular-toc'])
	;
})();

//app.constant.js
;(function(){
	angular.module('app').
		constant('CONFIG', {
			API_ENDPOINT: 'md/',
			SITEMAP_FILE: 'sitemap.md'
		});
})();

angular.module('app').config(function($controllerProvider,$compileProvider){
    window.app = {
				$controllerProvider: $controllerProvider,
        $compileProvider: $compileProvider
    }
});

//app.config.js
;(function(){

	angular.module('app').config(config);

	config.$inject = [
		'$stateProvider',
		'$urlRouterProvider',
		'$locationProvider'
	];
	function config(
		$stateProvider,
		$urlRouterProvider,
		$locationProvider
	){
		$urlRouterProvider.otherwise('/index.md');
		$stateProvider.
			state('article', {
				url: '/{articleId:.+}.md',
				views: {
					'viewArticle': {
						template: '<md-loader class="mdLoader" url="md/{{vm.articleId}}.md" md-callback="vm.callback(promise)"/>',
						controllerAs: 'vm',
						controller: controller
					}
				}
			})
	}
	controller.$inject = [
		'$stateParams',
		'$compile',
		'$scope'
	];
	function controller(
		$stateParams,
		$compile,
		$scope
	){
		this.articleId = $stateParams.articleId;
		this.callback = function(promise){
			promise.then(function(){
				$compile(
					angular.element('.l-subArea').
						html('<toc start-heading-element=".l-mainArea h2" from-heading-level="2" to-heading-level="4" on-filter="vm.tocFilter(heading)"/>').
						contents()
				)($scope);
				$('.l-mainArea .mdLoader').easyCodePrettify();
			})
		}
		this.tocFilter = function(heading){
			return !/\s(demo|code)\s/i.test(' '+heading.el.textContent+' ');
		}
	}

})();

//app.controller.js
;(function(){
	angular.module('app').controller('appController', controller);

	controller.$inject = [
		'CONFIG',
		'$compile'
	];
	function controller(
		CONFIG,
		$compile
	){
		this.sitemapUrl = CONFIG.API_ENDPOINT + CONFIG.SITEMAP_FILE
    window.app.$compile = $compile
	}
})();

angular.module('app').directive('hoge', function(){
	return {
		scope: {
			cb: '&'
		},
		template: '<div ng-click="vm.click()">hoge</div>',
		controllerAs: 'vm',
		controller: function($scope){
			this.click = function(){
				$scope.cb()
			}
		}
	}
})
