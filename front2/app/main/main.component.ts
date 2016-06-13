import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { FinderComponent } from '../finder/finder.component';
import { HistoryComponent } from '../history/history.component';
import { AnagService } from '../services/anag.service';

@Component({
    selector: 'app',
    templateUrl: './app/main/main.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AnagService, ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/',
    name: 'Finder',
    component: FinderComponent
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryComponent
  }
])

export class MainComponent {}