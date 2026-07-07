import { Component, Input } from '@angular/core';
import { Project } from '../_models/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}
  
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

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg ',
      initialState: {
        project: this.project,
      },
    };
    this.bsModalRef = this.modalService.show(
      ProjectModalComponent,
      modalOptions,
    );
  }
}
