import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  constructor() {}
  /*scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }*/
  ngOnInit() {

  }
  ngOnDestroy() {
  }

}
