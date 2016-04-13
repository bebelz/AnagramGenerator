angular
	.module('app')

	.component('main' , {
		templateUrl:'app/main/main.component.html',
		$routeConfig: [
			{path: '/', name: 'Finder', component: 'finder', useAsDefault: true},
			{path: '/users/', name: 'History', component: 'history' }
  		]
	})

	.value('$routerRootComponent', 'main')
;