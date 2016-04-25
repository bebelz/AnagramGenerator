angular
	.module('app')

	.component('history' , {
		templateUrl:'app/history/history.component.html',
		controller: HistoryController,
		controllerAs: 'vm'
	});

HistoryController.$inject = ['anagService'];
function HistoryController(anagService) {

	var vm = this;

	// Attributes
	vm.history;
	vm.loading;
	vm.networkError;

	vm.loading = true;
	anagService.getHistory(0,10)
		// Succes
		.then(function(response) {
			vm.loading = false;
			vm.history = response.data;
		})
		// Failure
		.catch(function(error) {
			vm.loading = false;
			vm.networkError = true;
			console.log(error);
		})
	;
}