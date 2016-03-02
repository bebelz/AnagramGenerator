import {Component, AfterViewInit} from 'angular2/core';
import {AnagFinderComponent} from './anagrams/anagrams.component';
import {AnagramsService} from './anagrams/anagrams.service';
declare var componentHandler: any;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [AnagFinderComponent],
  providers: [AnagramsService]
})

export class AppComponent implements AfterViewInit {
    
    ngAfterViewInit() { // Maybe awful perf-wise, to improve
        componentHandler.upgradeAllRegistered()
    }
    
    public title = 'Anagrams Generator';
}
