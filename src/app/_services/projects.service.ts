import { Injectable } from '@angular/core';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'DEPDEV PIMS',
      description: 'DEPDEV Region VII PIMS is a Project Information Management System for the Department of Economy, Planning, and Development in Region VII of the Philippines, built with an Angular frontend and Django REST Framework backend on PostgreSQL. It streamlines government project tracking, proposals, monitoring (RPMES), reports, and planning workflows across agencies and divisions.',
      projectLink: '',
      tags: ['Angular', 'Django', 'Bootstrap'],
      images: [
        '../../assets/f1.png',
        '../../assets/f2.png',
        '../../assets/f3.png',
        '../../assets/f4.png',
        '../../assets/f5.png',
        '../../assets/f6.png',
      ],
      summary: 'DEPDEV Region VII PIMS is a Project Information Management System for the Department of Economy, Planning, and Development in Region VII of the Philippines, built with an Angular frontend and Django REST Framework backend on PostgreSQL',
    },
    {
      id: 1,
      name: 'UPLIMS',
      description: 'UPLIMS is a Laravel-based Laboratory Information Management System (LIMS) for managing laboratory tests, equipment, billing, invoicing, and monitoring — built for a medical/clinical lab setting.',
      projectLink: '',
      tags: ['Laravel', 'PHP', 'Bootstrap'],
      images: [
        '../../assets/p1.png',
        '../../assets/p2.png',
        '../../assets/p3.png',
        '../../assets/p4.png',
      ],
      summary: 'UPLIMS is a Laravel-based Laboratory Information Management System (LIMS) for managing laboratory tests, equipment, billing, invoicing, and monitoring — built for a medical/clinical lab setting.',
    },
    {
      id: 2,
      name: 'ATI UNEXSYS',
      description: 'A Laravel 8 web-based information system for the Agricultural Training Institute (ATI) that standardizes planning, monitoring, and evaluation of Agriculture and Fisheries Extension (AFE) services across ATI regional centers and partner agencies in the Philippines.',
      projectLink: '',
      tags: ['Laravel', 'PHP', 'Bootstrap'],
      images: [
        '../../assets/a1.png',
        '../../assets/a2.png',
        '../../assets/a3.png',
        '../../assets/a4.png',
      ],
      summary: 'A Laravel 8 web-based information system for the Agricultural Training Institute (ATI) that standardizes planning, monitoring, and evaluation of Agriculture and Fisheries Extension (AFE) services across ATI regional centers and partner agencies in the Philippines.',
    },
    {
      id: 4,
      name: 'EFilling',
      description: 'The EFilling project is an electronic deposit insurance claim submission system for PDIC (Philippine Deposit Insurance Corporation). It walks depositors through a guided workflow — verifying their closed bank, entering personal and account details, selecting a payment option, uploading documents, and submitting their claim — all protected by route guards to enforce step order. The stack consists of an Angular 16 frontend (UI), an ASP.NET Core Web API backend (C#) handling business logic and email notifications, and an SSIS package that integrates submitted data with the main UICS system.',
      projectLink: '',
      tags: ['Angular', 'C#', 'Bootstrap'],
      images: [
        '../../assets/Efilling_1.png',
        '../../assets/Efilling_2.png',
        '../../assets/Efilling_3.png',
        '../../assets/Efilling_4.png',
        '../../assets/Efilling_5.png',
        '../../assets/Efilling_6.png',
        '../../assets/Efilling_7.png',
        '../../assets/Efilling_8.png',
        '../../assets/Efilling_9.png',
        '../../assets/Efilling_10.png',
      ],
      summary: 'The EFilling project is an electronic deposit insurance claim submission system for PDIC (Philippine Deposit Insurance Corporation). It walks depositors through a guided workflow — verifying their closed bank, entering personal and account details, selecting a payment option, uploading documents, and submitting their claim — all protected by route guards to enforce step order. The stack consists of an Angular 16 frontend (UI), an ASP.NET Core Web API backend (C#) handling business logic and email notifications, and an SSIS package that integrates submitted data with the main UICS system.',
    },
    {
      id: 5,
      name: 'EDIUF',
      description: 'The EDIUF (Electronic Deposit Insurance Undertaking Form) project is a PDIC online portal that allows depositors to electronically file their deposit insurance claims against closed banks. Like EFilling, it guides users through a step-by-step workflow — verifying their bank, entering depositor and account details, selecting a payment option, uploading documents, and reviewing their claim — all enforced by route guards. The stack is identical: an Angular 16 frontend, an ASP.NET Core Web API (C#) backend with AutoMapper and a layered service architecture, and an SSIS integration package that syncs submitted data with the main UICS system.',
      projectLink: '',
      tags: ['Angular', 'C#', 'Bootstrap'],
      images: [
        '../../assets/ediuf_1.png',
        '../../assets/ediuf_2.png',
        '../../assets/ediuf_3.png',
        '../../assets/ediuf_4.png',
        '../../assets/ediuf_5.png',
        '../../assets/ediuf_6.png',
        '../../assets/ediuf_6.5.png',
        '../../assets/ediuf_7.png',
        '../../assets/ediuf_8.png',
        '../../assets/ediuf_9.png',
        '../../assets/ediuf_10.png',
      ],
      summary: 'The EDIUF (Electronic Deposit Insurance Undertaking Form) project is a PDIC online portal that allows depositors to electronically file their deposit insurance claims against closed banks. Like EFilling, it guides users through a step-by-step workflow — verifying their bank, entering depositor and account details, selecting a payment option, uploading documents, and reviewing their claim — all enforced by route guards. The stack is identical: an Angular 16 frontend, an ASP.NET Core Web API (C#) backend with AutoMapper and a layered service architecture, and an SSIS integration package that syncs submitted data with the main UICS system.',
    },
  ];
  constructor() {}

  GetProjects() {
    return this.projects;
  }
  GetProjectByID(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new TypeError('Project not found');
    }

    return project;
  }
}
