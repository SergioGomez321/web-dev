import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  
  

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['es','en']);
    //this.translate.setDefaultLang('es');
    let lang = navigator.language || navigator["userLanguage"];
    let langArray = lang.split('-');

    if(langArray.length > 0 )
      this.translate.use(lang.split('-')[0]);
    else 
      this.translate.use('en');


    
  }

  changeLanguage(lang){
    this.translate.use(lang);
  }
  /*scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }*/
  ngOnInit() {

  }
  ngOnDestroy() {
  }

}
