import { Component } from '@angular/core';
import { AnagService } from '../services/anag.service';


@Component({
  selector: 'anag-finder',
  templateUrl: './app/finder/finder.component.html',
  providers: [AnagService]
})

export class FinderComponent {
    constructor(private anagService: AnagService) {}

    private regexWord = new RegExp("^[a-zàâçéèêëîïôûùüÿñæœ]+$", 'i');
	
	// Attributes
	loading = false;
	anags;
	warning;
	error;

	validateTyping(word) {
		if(word) {
			if(word.match(this.regexWord)) {
				return true;
			}
			return false;
		}
		// Empty
		return true;
	}

	search(word) {
		// Reset display
		this.anags = null;
		this.warning = null;
		this.error = null;

		if(this.validateTyping(word)) {
			this.loading = true;

			this.anagService.getAnagram(word)
				// Succes
				.then(response => {
					console.log("response received");
					this.anags = response.data;
					this.loading = false;
				})
				// Failure
				.catch(error => {
					if(error.status == 404) {
						this.warning = 'Il n\'existe malheureusement pas d\'anagrammes de ce mot';
					} else {
						this.error = 'Une erreur a eu lieu lors de la recherche, veuillez ré-essayer';
					}
					this.loading = false;
				})
            ;

		} else {
			this.error = 'Veuillez saisir un mot correct';
		}
	}
}