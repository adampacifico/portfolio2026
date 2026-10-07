import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;
  qualifications = [
    {
      title: '4+ years of experience',
      subtitle: 'Real World experience in building web applications and software solutions.',
      icon: 'bi bi-calendar2-check',
    },
    {
      title: 'Frontend Expertise',
      subtitle: 'Proficient in Angular, React, Vue, and modern web technologies.',
      icon: 'bi bi-code-slash',
    },
    {
      title: 'Responsive Design',
      subtitle: 'Ensures your applications look great on all devices.',
      icon: 'bi bi-phone'
    },
    {
      title: 'Backend Integration',
      subtitle: 'Seamless integration with backend services and APIs.',
      icon: 'bi bi-server'
    },
    {
      title: 'Clean and Maintainable Code',
      subtitle: 'Writes clean, maintainable, and well-structured code.',
      icon: 'bi bi-file-earmark-code',
    },
    {
      title: 'AI Assisted Development',
      subtitle: 'Leverages AI tools to enhance development efficiency and code quality.',
      icon: 'bi bi-robot',
    },
  ]

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Adam Pacifico - Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectByID(0)
  }
}
