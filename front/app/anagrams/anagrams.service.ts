import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {ANAGRAMS} from './mock-anagrams';

@Injectable()
export class AnagramsService {
  constructor (private http: Http) {}

  private _getAnagUrl = 'http://178.32.218.17:8001/anag/';
    
  getAnagrams(word: string) {
    //return Promise.resolve(ANAGRAMS);
    if(!word) {return Observable.throw("Veuillez saisir un mot.")}
    return this.http.get(this._getAnagUrl + word)
                    .map(res => res.json().data)
                    .do(data => console.log(data)) // Remove this when dev finished
                    .catch(this.handleError);
  }
  
  private handleError (error: Response) {
    console.error(error);
    if(error.status == 404) {
        return Observable.throw("Pas d'anagramme trouvé pour ce mot");
    }
    return Observable.throw(error.json().error || 'Server error');
  }
}