import { ContentChild, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http: HttpClient) { }


  sendEmail(contact : Contact) {
    return this._http.post(environment.hostname +'/formulario', contact);
  }
}
