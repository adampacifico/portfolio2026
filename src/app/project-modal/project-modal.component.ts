import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {

  project = {} as Project;
  
  getTagClass(tag: string): string {
    const colors: { [key: string]: string } = {
      // Frameworks
      Angular: 'bg-danger',
      REACT: 'bg-info',
      Vue: 'bg-success',
      Laravel: 'bg-danger',
      PHP: 'bg-primary',
      Django: 'bg-success',

      // Languages
      JavaScript: 'bg-warning text-dark',
      TypeScript: 'bg-primary',
      // PHP: 'bg-secondary',
      'C#': 'bg-secondary',
      Python: 'bg-warning text-dark',

      // Styling
      HTML: 'bg-danger',
      HTML5: 'bg-danger',
      CSS: 'bg-primary',
      Bootstrap: 'bg-purple',
      Tailwind: 'bg-info text-dark',
      SCSS: 'bg-pink',
      Firebase: 'bg-warning text-dark',
    };

    return colors[tag] || 'bg-secondary';
  }
  constructor(public bsModalRef: BsModalRef){

  }
}
