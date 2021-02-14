import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

   id : number;

   project : Project;

   projects : Project[]= [];

  constructor(private _Activatedroute : ActivatedRoute, public _ProjectService: ProjectService) {
    
    this.id = parseInt(this._Activatedroute.snapshot.paramMap.get("id"));
    this._ProjectService.getProjects().subscribe(data => {
      this.projects = data["projects"];
      this.project = this.projects.filter(p => p.id == this.id)[0];
    });
    
   }

  ngOnInit(): void {
    
  }

}
