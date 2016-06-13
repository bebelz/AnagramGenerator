import { Component } from '@angular/core';
import { AnagService } from '../services/anag.service';

@Component({
  selector: 'anag-history',
  templateUrl: './app/history/history.component.html',
  providers: [AnagService]
})

export class HistoryComponent {
    constructor(private anagService: AnagService) {
        this.anagService.getHistory(0,10)
            // Succes
            .then(response => {
                this.loading = false;
                this.history = response.data;
            })
            // Failure
            .catch(error => {
                this.loading = false;
                this.networkError = true;
                console.log(error);
            })
	    ;
    }

    // Attributes
	history;
	networkError;
	loading = true;
}