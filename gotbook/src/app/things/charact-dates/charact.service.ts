import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Character } from './charact.model';
import { Message } from '../../messages/messages-list/message/message.model';
import { Relation } from '../../partners/relations.model';


@Injectable()
export class CharactService {

  private URLBase = 'http://localhost:3000/';

  constructor(private http: Http) { }

getCharacter(character: Character): Observable<Character[]> {
  return this.http.get(`${this.URLBase}/character/${character['id']}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

}

updateCharacter(character: Character): Observable<Character[]> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post(`${this.URLBase}/character/${character['id']}`, character , options)
                  .map((res: Response) => res.json())
                  .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
}




}
