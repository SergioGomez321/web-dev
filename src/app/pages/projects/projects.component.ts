import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  projects : Project[]= [];


  constructor(public _ProjectService: ProjectService) { }

  ngOnInit(): void {
    this._ProjectService.getProjects().subscribe(data => {
      this.projects = data["projects"];
    });
  }

  doSomething(event, project){
    event.stopPropagation();
    alert(project.title);
    console.log(project);
  }

}
