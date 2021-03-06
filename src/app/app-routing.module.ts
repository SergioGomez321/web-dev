import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { AboutmeComponent } from "./pages/aboutme/aboutme.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MessageService } from "./services/message.service";
import { ProjectComponent } from "./pages/project/project.component";
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from "@ngx-translate/core";
import { PagesModule } from "./pages/pages.module";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "aboutme", component: AboutmeComponent },
  { path: "contact", component: ContactComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "project/:id", component: ProjectComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "landing", component: LandingpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    PagesModule
  ],
  exports: [TranslateModule],
  providers: [
    
  ]
})
export class AppRoutingModule {}
