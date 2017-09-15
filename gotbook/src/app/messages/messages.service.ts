import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { Message } from "./messages-list/message/message.model";
import { Character } from "../things/charact-dates/charact.model";


const URLBase = 'http://localhost:3000/';

@Injectable()
export class MessagesService {

    constructor(private http: Http) { }

    getAllMessages(): Observable<Message[]> {
        return this.http.get(`${URLBase}/message`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    getMessageByCharact(charact: Character): Observable<Message[]> {
        return this.http.get(`${URLBase}/message/charact/${charact['id']}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    publishMessage(message: Message): Observable<Message[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${URLBase}`, message, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateStateMessage(message: Message): Observable<Message[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(`${URLBase}/message/${message['id']}`, message, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
    }
}
