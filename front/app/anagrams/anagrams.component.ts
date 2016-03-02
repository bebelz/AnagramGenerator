import {Component} from 'angular2/core';
import {AnagramsService} from './anagrams.service';

@Component({
  selector: 'anag-finder',
  templateUrl:'app/anagrams/anagrams.component.html',
  styleUrls: [],
  directives: []
})



export class AnagFinderComponent {
    
    constructor(private _anagramsService: AnagramsService) {}
    
    private anags: string[];
    private errorMessage: any;
    
    search(word: string) {
        this.anags = null;
        this.errorMessage = null;
        this._anagramsService.getAnagrams(word).subscribe(
            anags => this.anags = anags,
            error =>  this.errorMessage = <any>error
        );
    }
}