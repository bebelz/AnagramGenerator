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

	anagService.getHistory(0,10)
		// Succes
		.then(function(response) {
			vm.history = response.data;
		})
		// Failure
		.catch(function(error) {
			console.log("ERROR");
		})
	;
}