angular
	.module('app')

	.component('finder' , {
		templateUrl:'app/finder/finder.component.html',
		controller: FinderController,
		controllerAs: 'vm'
	});

FinderController.$inject = ['anagService'];
function FinderController(anagService) {
	var regexWord = new RegExp("^[a-zàâçéèêëîïôûùüÿñæœ]+$", 'i');

	var vm = this;
	
	// Attributes
	vm.loading = false;
	vm.anags;
	vm.warning;
	vm.error;

	// Methods
	vm.search = search;
	vm.validateTyping = validateTyping;

	function validateTyping(word) {
		if(word) {
			if(word.match(regexWord)) {
				return true;
			}
			return false;
		}
		// Empty
		return true;
	}

	function search(word) {
		
		// Reset display
		vm.anags = null;
		vm.warning = null;
		vm.error = null;

		if(validateTyping(word)) {
			vm.loading = true;

			anagService.getAnagram(word)
				// Succes
				.then(function(response) {
					console.log("response received");
					vm.anags = response.data;
					vm.loading = false;
				})
				// Failure
				.catch(function(error) {
					if(error.status == 404) {
						vm.warning = 'Il n\'existe malheureusement pas d\'anagrammes de ce mot';
					} else {
						vm.error = 'Une erreur a eu lieu lors de la recherche, veuillez ré-essayer';
					}
					vm.loading = false;
				})
			;

		} else {
			vm.error = 'Veuillez saisir un mot correct';
		}
	}
}