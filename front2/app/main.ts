import { bootstrap }    from '@angular/platform-browser-dynamic';

import { HTTP_PROVIDERS } from '@angular/http';

import { MainComponent } from './main/main.component';

import './rxjs-operators';

bootstrap(MainComponent, [HTTP_PROVIDERS]);