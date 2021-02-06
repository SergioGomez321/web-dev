import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  projects = [
    {
      "title" : "Recruitment, induction, training of human resources",
      "description" : "Description of Training and induction of human capital",
      "img" : "assets/img/projects/recruiter.png"
    }, 
    {
      "title" : "Vending a machine",
      "description" : "Description of Vending a machine",
      "img" : "assets/img/projects/default.png"
    },
    {
      "title" : "Create a computer",
      "description" : "Description of  create a computer",
      "img" : "assets/img/projects/default.png"
    },
    {
      "title" : "Puzzle",
      "description" : "Description of the puzzle",
      "img" : "assets/img/projects/puzzle.png"
    },
    {
     "title" : "Chat bot ",
     "description" : "Description of chat bot",
     "img" : "assets/img/projects/chatbot.png"
    }, 
    {
      "title" : "Dashing dashboard",
      "description" : "Description of dashing dashboard",
      "img" : "assets/img/projects/dashing.png"
    },
    {
      "title" : "Documents respository",
      "description" : "Description of documents repository",
      "img" : "assets/img/projects/default.png"
    },
    {
      "title" : "My own page",
      "description" : "Description of My own page",
      "img" : "assets/img/projects/page.png"
    },
    {
      "title" : "Machinery request", 
      "description" : "Description of machinery request",
      "img" : "assets/img/projects/default.png"
    }, 
    {
      "title" : "Shredder administration",
      "description" : "Description of Shredder administration",
      "img" : "assets/img/projects/default.png"
    }
  ];


  constructor() { }

  ngOnInit(): void {}

  doSomething(event, project){
    event.stopPropagation();
    alert(project.title);
    console.log(project);
  }

}
