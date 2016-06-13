import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { HISTORY } from './mock-history';

@Injectable()
export class AnagService {
    constructor (private http: Http) {}

    private BASE_URL = 'http://178.32.218.17:8001';
    private GET_ANAG_URL = this.BASE_URL + '/anag/';

    getAnagram(word: string): Promise<{data: string[]}> {
        return this.http.get(this.GET_ANAG_URL + word).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
	}

    getHistory(offset: number, limit: number): Promise<{data: [{word: string, date: string}]}> {
        return Promise.resolve(HISTORY);
    }

    private extractData(response: Response) {
        return {data: response.json().data};
    }

    private handleError(reason: any) {
        return Promise.reject(reason.message);
    }
}