import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http: HttpClient,
    public translate: TranslateService) { 

    }


  getProjects() {
    return this._http.get(`./assets/json/projects-${this.translate.currentLang}.json`);
  }

  
}
