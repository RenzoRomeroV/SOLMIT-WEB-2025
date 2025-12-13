import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
  detailedDescription: string;
  image: string;
  keyFeatures: string[];
}

interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
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
export class ServiciosComponent {
  selectedService: Service | null = null;
  isModalOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  services: Service[] = [
    {
      id: 1,
      title: 'IT Staff Augmentation',
      icon: '👥',
      description: 'Amplía tu equipo con talento especializado',
      detailedDescription: 'Integramos profesionales altamente calificados a tu equipo de desarrollo. Nuestros especialistas se adaptan rápidamente a tus procesos y metodologías, permitiéndote escalar tu capacidad de desarrollo sin los costos y tiempos de contratación tradicionales.',
      image: '/assets/images/services/It-Staff-Augmentation.png',
      keyFeatures: [
        'Integración rápida con tu equipo',
        'Profesionales certificados',
        'Flexibilidad en contratación',
        'Reducción de costos operativos'
      ]
    },
    {
      id: 2,
      title: 'Consultoría TI',
      icon: '💼',
      description: 'Asesoría estratégica para tu transformación digital',
      detailedDescription: 'Te ayudamos a definir e implementar estrategias tecnológicas que impulsen tu negocio. Nuestros consultores analizan tus procesos actuales y diseñan soluciones personalizadas que optimizan la eficiencia y generan valor real para tu organización.',
      image: '/assets/images/services/Consultoría-TI.png',
      keyFeatures: [
        'Análisis estratégico profundo',
        'Roadmap de transformación',
        'Optimización de procesos',
        'Implementación guiada'
      ]
    },
    {
      id: 3,
      title: 'Desarrollo Ágil de Software',
      icon: '⚡',
      description: 'Metodologías ágiles para resultados rápidos',
      detailedDescription: 'Desarrollamos software de alta calidad utilizando metodologías ágiles como Scrum y Kanban. Nuestro enfoque iterativo te permite ver resultados tangibles desde las primeras semanas, con entregas continuas que se adaptan a tus necesidades cambiantes.',
      image: '/assets/images/services/Desarrollo-Ágil-Software.png',
      keyFeatures: [
        'Entregas incrementales',
        'Metodologías Scrum/Kanban',
        'Feedback continuo',
        'Alta calidad de código'
      ]
    },
    {
      id: 4,
      title: 'Fábrica de Software',
      icon: '🏭',
      description: 'Producción eficiente y escalable de software',
      detailedDescription: 'Operamos como una fábrica de software completa, desde el diseño hasta el mantenimiento. Contamos con procesos estandarizados y equipos multidisciplinarios que garantizan entregas consistentes, escalables y de alta calidad para proyectos de cualquier tamaño.',
      image: '/assets/images/services/Fábrica-Software.png',
      keyFeatures: [
        'Procesos estandarizados',
        'Equipos multidisciplinarios',
        'Control de calidad',
        'Escalabilidad garantizada'
      ]
    },
    {
      id: 5,
      title: 'Testing de Software',
      icon: '✅',
      description: 'Garantía de calidad en cada proyecto',
      detailedDescription: 'Aseguramos la calidad de tu software mediante pruebas exhaustivas y automatizadas. Nuestros QA engineers utilizan las mejores herramientas y prácticas del mercado para detectar y prevenir defectos, garantizando que tu producto cumpla con los más altos estándares de calidad.',
      image: '/assets/images/services/Testing-Software.png',
      keyFeatures: [
        'Pruebas automatizadas',
        'Cobertura completa',
        'Detección temprana de errores',
        'Reportes detallados'
      ]
    }
  ];

  processSteps: ProcessStep[] = [
    {
      id: 1,
      step: '01',
      title: 'Consulta',
      description: 'Analizamos tus necesidades y objetivos',
      icon: '📞'
    },
    {
      id: 2,
      step: '02',
      title: 'Propuesta',
      description: 'Diseñamos una solución personalizada',
      icon: '📋'
    },
    {
      id: 3,
      step: '03',
      title: 'Desarrollo',
      description: 'Ejecutamos el proyecto con metodologías ágiles',
      icon: '💻'
    },
    {
      id: 4,
      step: '04',
      title: 'Entrega',
      description: 'Entregamos la solución y brindamos soporte',
      icon: '🚀'
    }
  ];

  openServiceDetail(service: Service) {
    this.selectedService = service;
    this.isModalOpen = true;
    this.document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedService = null;
    this.document.body.style.overflow = '';
  }
}

