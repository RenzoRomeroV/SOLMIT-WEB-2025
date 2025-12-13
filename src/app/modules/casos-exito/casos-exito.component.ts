import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  client: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: {
    improvement: string;
    time: string;
  };
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-casos-exito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casos-exito.component.html',
  styleUrl: './casos-exito.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('modalFadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalSlideUp', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.3s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateY(50px)', opacity: 0 }))
      ])
    ])
  ]
})
export class CasosExitoComponent {
  selectedProject: Project | null = null;
  isModalOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  projects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Gestión Gubernamental',
      description: 'Plataforma integral para la gestión de procesos administrativos del sector público.',
      category: 'Sector Público',
      client: 'Gobierno Regional',
      challenge: 'Necesitaban modernizar sus procesos administrativos obsoletos y mejorar la eficiencia operativa.',
      solution: 'Desarrollamos una plataforma web completa con integración de múltiples sistemas, automatización de procesos y dashboard de analytics.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS'],
      results: {
        improvement: '+70%',
        time: '6 meses'
      }
    },
    {
      id: 2,
      title: 'Plataforma E-commerce Empresarial',
      description: 'Solución de comercio electrónico B2B con gestión de inventario y facturación.',
      category: 'Retail',
      client: 'Empresa Retail',
      challenge: 'Requieren una plataforma escalable que maneje alto volumen de transacciones y múltiples proveedores.',
      solution: 'Implementamos una arquitectura microservicios con alta disponibilidad, integración de pagos y sistema de gestión de inventario en tiempo real.',
      technologies: ['React', 'Spring Boot', 'MongoDB', 'Docker'],
      results: {
        improvement: '+85%',
        time: '8 meses'
      }
    },
    {
      id: 3,
      title: 'Sistema Bancario Digital',
      description: 'Aplicación móvil y web para operaciones bancarias digitales.',
      category: 'Banca',
      client: 'Banco Nacional',
      challenge: 'Modernizar la experiencia del usuario y aumentar la adopción de servicios digitales.',
      solution: 'Creamos una aplicación multiplataforma con autenticación biométrica, transferencias instantáneas y gestión de inversiones.',
      technologies: ['React Native', 'Java', 'Oracle', 'Kubernetes'],
      results: {
        improvement: '+60%',
        time: '10 meses'
      }
    },
    {
      id: 4,
      title: 'Sistema de Seguros en Línea',
      description: 'Plataforma para cotización y contratación de seguros digitales.',
      category: 'Seguro',
      client: 'Compañía de Seguros',
      challenge: 'Digitalizar el proceso de cotización y contratación de pólizas para reducir tiempos y costos.',
      solution: 'Desarrollamos un sistema con IA para evaluación de riesgos, cotización automática y firma digital de contratos.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Azure'],
      results: {
        improvement: '+50%',
        time: '7 meses'
      }
    }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      position: 'Director de TI',
      company: 'Gobierno Regional',
      text: 'SOLMIT transformó completamente nuestros procesos. La plataforma que desarrollaron ha mejorado nuestra eficiencia en más del 70%. El equipo fue profesional, ágil y siempre disponible.',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'María Fernández',
      position: 'CEO',
      company: 'Empresa Retail',
      text: 'Trabajar con SOLMIT fue una experiencia excepcional. Entregaron un proyecto complejo a tiempo y superaron nuestras expectativas. Su enfoque ágil y profesional es impresionante.',
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Roberto Silva',
      position: 'Gerente de Tecnología',
      company: 'Banco Nacional',
      text: 'La aplicación desarrollada por SOLMIT ha revolucionado nuestra relación con los clientes. La calidad del código y la atención al detalle son de primer nivel.',
      avatar: '👨‍💻'
    }
  ];

  openProjectDetail(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
    this.document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
    this.document.body.style.overflow = '';
  }
}

