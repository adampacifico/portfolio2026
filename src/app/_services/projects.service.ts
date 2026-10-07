import { Injectable } from '@angular/core';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      order: '5',
      name: 'DEPDEV PIMS',
      description:
        'DEPDEV Region VII PIMS is a Project Information Management System for the Department of Economy, Planning, and Development in Region VII of the Philippines, built with an Angular frontend and Django REST Framework backend on PostgreSQL. It streamlines government project tracking, proposals, monitoring (RPMES), reports, and planning workflows across agencies and divisions.',
      projectLink: '',
      type: '1',
      tags: ['Angular', 'Django', 'Bootstrap'],
      images: [
        '../../assets/f1.png',
        '../../assets/f2.png',
        '../../assets/f3.png',
        '../../assets/f4.png',
        '../../assets/f5.png',
        '../../assets/f6.png',
      ],
      summary:
        'DEPDEV Region VII PIMS is a Project Information Management System for the Department of Economy, Planning, and Development in Region VII of the Philippines, built with an Angular frontend and Django REST Framework backend on PostgreSQL',
    },
    {
      id: 1,
      order: '4',
      name: 'UPLIMS',
      description:
        'UPLIMS is a Laravel-based Laboratory Information Management System (LIMS) for managing laboratory tests, equipment, billing, invoicing, and monitoring — built for a medical/clinical lab setting.',
      projectLink: '',
      tags: ['Laravel', 'PHP', 'Bootstrap'],
      type: '1',
      images: [
        '../../assets/p1.png',
        '../../assets/p2.png',
        '../../assets/p3.png',
        '../../assets/p4.png',
      ],
      summary:
        'UPLIMS is a Laravel-based Laboratory Information Management System (LIMS) for managing laboratory tests, equipment, billing, invoicing, and monitoring — built for a medical/clinical lab setting.',
    },
    {
      id: 2,
      order: '3',
      name: 'ATI UNEXSYS',
      description:
        'A Laravel 8 web-based information system for the Agricultural Training Institute (ATI) that standardizes planning, monitoring, and evaluation of Agriculture and Fisheries Extension (AFE) services across ATI regional centers and partner agencies in the Philippines.',
      projectLink: '',
      type: '1',
      tags: ['Laravel', 'PHP', 'Bootstrap'],
      images: [
        '../../assets/a1.png',
        '../../assets/a2.png',
        '../../assets/a3.png',
        '../../assets/a4.png',
      ],
      summary:
        'A Laravel 8 web-based information system for the Agricultural Training Institute (ATI) that standardizes planning, monitoring, and evaluation of Agriculture and Fisheries Extension (AFE) services across ATI regional centers and partner agencies in the Philippines.',
    },
    {
      id: 4,
      order: '2',
      name: 'EFilling',
      description:
        'The EFilling project is an electronic deposit insurance claim submission system for PDIC (Philippine Deposit Insurance Corporation). It walks depositors through a guided workflow — verifying their closed bank, entering personal and account details, selecting a payment option, uploading documents, and submitting their claim — all protected by route guards to enforce step order. The stack consists of an Angular 16 frontend (UI), an ASP.NET Core Web API backend (C#) handling business logic and email notifications, and an SSIS package that integrates submitted data with the main UICS system.',
      projectLink: '',
      type: '1',
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
      summary:
        'The EFilling project is an electronic deposit insurance claim submission system for PDIC (Philippine Deposit Insurance Corporation). It walks depositors through a guided workflow — verifying their closed bank, entering personal and account details, selecting a payment option, uploading documents, and submitting their claim — all protected by route guards to enforce step order. The stack consists of an Angular 16 frontend (UI), an ASP.NET Core Web API backend (C#) handling business logic and email notifications, and an SSIS package that integrates submitted data with the main UICS system.',
    },
    {
      id: 5,
      order: '1',
      name: 'EDIUF',
      description:
        'The EDIUF (Electronic Deposit Insurance Undertaking Form) project is a PDIC online portal that allows depositors to electronically file their deposit insurance claims against closed banks. Like EFilling, it guides users through a step-by-step workflow — verifying their bank, entering depositor and account details, selecting a payment option, uploading documents, and reviewing their claim — all enforced by route guards. The stack is identical: an Angular 16 frontend, an ASP.NET Core Web API (C#) backend with AutoMapper and a layered service architecture, and an SSIS integration package that syncs submitted data with the main UICS system.',
      projectLink: '',
      type: '1',
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
      summary:
        'The EDIUF (Electronic Deposit Insurance Undertaking Form) project is a PDIC online portal that allows depositors to electronically file their deposit insurance claims against closed banks. Like EFilling, it guides users through a step-by-step workflow — verifying their bank, entering depositor and account details, selecting a payment option, uploading documents, and reviewing their claim — all enforced by route guards. The stack is identical: an Angular 16 frontend, an ASP.NET Core Web API (C#) backend with AutoMapper and a layered service architecture, and an SSIS integration package that syncs submitted data with the main UICS system.',
    },
    {
      id: 6,
      order: '6',
      name: 'DOE-EPS',
      description:
        'DOE-EPS (Department of Energy - Energy Performance System) is an online platform that allows users to monitor and manage energy performance data for various projects. A centralized, secure, and efficient electronic payment gateway for all DOE transactions.',
      projectLink: '',
      type: '1',
      tags: ['Vue', 'Laravel', 'Bootstrap'],
      // order: '5',
      images: [
        '../../assets/doe_1.png',
        '../../assets/doe_2.png',
        '../../assets/doe_3.png',
        '../../assets/doe_4.png',
        '../../assets/doe_5.png',
        '../../assets/doe_6.png',
        '../../assets/doe_7.png',
        '../../assets/doe_8.png',
      ],
      is_ongoing: true,
      summary:
        'Basically, DOE-EPS is designed to streamline the management of energy performance data and facilitate secure electronic transactions for the Department of Energy. From payor filling a billing statement, to the approval and processing of payments, the system ensures efficiency and transparency throughout the entire workflow. Though this portal, clients and stakeholders can easily submit payment requests, track transaction status, and manage payment-related activities anytime and anywhere.',
    },
    {
      id: 6,
      name: 'NETFLIX CLONE + TMDB API',
      description:
        'The NETFLIX CLONE + TMDB API project is a web application that mimics the Netflix interface and functionality, utilizing the TMDB API to fetch movie and TV show data. Users can browse and view details about various media content. The stack includes a React frontend for the user interface, a backend API for handling requests, and integration with the TMDB API for dynamic content.',
      projectLink: 'https://netflix-clone-app-d1abb.web.app/',
      type: '0',
      tags: ['REACT', 'TMDB API', 'Bootstrap'],
      images: [],
      summary:
        'The NETFLIX CLONE + TMDB API project is a web application that mimics the Netflix interface and functionality, utilizing the TMDB API to fetch movie and TV show data. Users can browse and view details about various media content. The stack includes a React frontend for the user interface, a backend API for handling requests, and integration with the TMDB API for dynamic content.',
    },
    {
      id: 7,
      name: 'DISNEY CLONE + FIREBASE',
      description:
        'The DISNEY CLONE + FIREBASE project is a web application that mimics the Disney+ interface and functionality, utilizing Firebase for authentication and data storage. Users can browse and view details about various media content. The stack includes a React frontend for the user interface, a backend API for handling requests, and integration with Firebase for dynamic content.',
      projectLink: 'https://disney-clone-app-8fe71.web.app/',
      type: '0',
      tags: ['REACT', 'FIREBASE', 'Bootstrap'],
      images: [],
      summary:
        'The DISNEY CLONE + FIREBASE project is a web application that mimics the Disney+ interface and functionality, utilizing Firebase for authentication and data storage. Users can browse and view details about various media content. The stack includes a React frontend for the user interface, a backend API for handling requests, and integration with Firebase for dynamic content.',
    },
    {
      id: 8,
      name: 'TESLA CLONE',
      description:
        'Made with React, the TESLA CLONE project replicates the Tesla website’s design and functionality. It features a responsive layout, interactive elements, and dynamic content to provide users with an immersive experience similar to the official Tesla site.',
      projectLink: 'https://tesla-clone-app-9da84.web.app/',
      type: '0',
      tags: ['REACT', 'CSS'],
      images: [],
      summary:
        'Made with React, the TESLA CLONE project replicates the Tesla website’s design and functionality. It features a responsive layout, interactive elements, and dynamic content to provide users with an immersive experience similar to the official Tesla site.',
    },
    {
      id: 9,
      name: 'JAVASCRIPT DOCUMENTATION',
      description:
        'This project is focused on creating comprehensive documentation for various software projects. It includes detailed explanations, code examples, and best practices to help developers understand and implement the projects effectively.',
      projectLink: 'https://adampacifico.github.io/Documentation/',
      type: '0',
      tags: ['HTML', 'CSS', 'JavaScript'],
      images: [],
      summary:
        'This project is focused on creating comprehensive documentation for various software projects. It includes detailed explanations, code examples, and best practices to help developers understand and implement the projects effectively.',
    },
    {
      id: 10,
      name: 'BASIC CALCULATOR',
      description:
        'This project is focused on creating a basic calculator application. It includes functionalities for basic arithmetic operations and provides a user-friendly interface for performing calculations.',
      projectLink: 'https://adampacifico.github.io/calculator/',
      type: '0',
      tags: ['HTML', 'CSS', 'JavaScript'],
      images: [],
      summary:
        'This project is focused on creating a basic calculator application. It includes functionalities for basic arithmetic operations and provides a user-friendly interface for performing calculations.',
    },
    {
      id: 11,
      name: 'RANDOM QUOTE GENERATOR',
      description:
        'This project is focused on creating a random quote generator application. It includes functionalities for fetching and displaying random quotes, providing users with inspirational or thought-provoking content.',
      projectLink: 'https://adampacifico.github.io/random-quote-generator/',
      type: '0',
      tags: ['HTML', 'CSS', 'JavaScript'],
      images: [],
      summary:
        'This project is focused on creating a random quote generator application. It includes functionalities for fetching and displaying random quotes, providing users with inspirational or thought-provoking content.',
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
