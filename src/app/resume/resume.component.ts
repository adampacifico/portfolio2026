import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  isworkExperienceOpen: boolean = false ; 
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Adam Pacifico - Resume');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Adam_Jaspher_L_Pacifico_CV_2026.pdf');
    link.setAttribute('download', 'adam_pacifico_resume_2026.pdf');
    link.click();
    link.remove();
  }
}
