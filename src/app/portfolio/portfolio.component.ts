import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Adam Pacifico - Portfolio');
  }

  ngOnInit(): void{
    this.projects = this.projectService.GetProjects();
    this.projects = this.sortedProjects;
    
  }
  get sortedProjects() {
  return [...this.projects].sort((a, b) => Number(b.order) - Number(a.order));
}
}
