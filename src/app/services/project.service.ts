import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http: HttpClient) { }


  getProjects() {
    return this._http.get('./assets/json/projects.json');
  }

  
}
