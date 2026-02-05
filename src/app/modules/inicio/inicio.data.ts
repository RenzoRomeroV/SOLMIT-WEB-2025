import {
  HowWeDoItem,
  Methodology,
  ProcessStep,
  SectorInfo,
  SectorCarouselItem,
  Service,
  Slide,
  TechCategory
} from './inicio.types';

export const slidesData: Slide[] = [
  {
    id: 1,
    title: 'Fabrica de Software',
    subtitle: 'TALENTO PARA IMPULSAR TUS PROYECTOS',
    buttonText: 'CONOCER MÁS',
    backgroundClass: 'slide-1',
    backgroundImage: '/assets/images/fondotefo3.jpeg',
    backgroundVideo: '/assets/video/fondo1.mp4',
    isVideo: true
  },
  {
    id: 2,
    title: 'MATERIALIZAMOS TUS IDEAS CON TECNOLOGÍA',
    subtitle: 'MEJORA E INNOVA CON TENDENCIAS TECNOLOGÍAS',
    buttonText: 'CONOCER MÁS',
    backgroundClass: 'slide-2',
    backgroundImage: '/assets/images/test6.png'
  },
  {
    id: 3,
    title: 'CONSULTORÍA TI',
    subtitle: 'TE AYUDAMOS A DAR EL SALTO A LA TRANSFORMACIÓN DIGITAL DE TU NEGOCIO',
    buttonText: 'CONOCER MÁS',
    backgroundClass: 'slide-3',
    backgroundImage: '/assets/images/FondoTI.png'
  }
];

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'It Staff Augmentation',
    icon: '👥',
    description: 'Amplía tu equipo con talento especializado',
    detailedDescription:
      'Integramos profesionales altamente calificados a tu equipo de desarrollo. Nuestros especialistas se adaptan rápidamente a tus procesos y metodologías, permitiéndote escalar tu capacidad de desarrollo sin los costos y tiempos de contratación tradicionales.',
    image: '/assets/images/services/It-Staff-Augmentation.png'
  },
  {
    id: 2,
    title: 'Consultoría TI',
    icon: '💼',
    description: 'Asesoría estratégica para tu transformación digital',
    detailedDescription:
      'Te ayudamos a definir e implementar estrategias tecnológicas que impulsen tu negocio. Nuestros consultores analizan tus procesos actuales y diseñan soluciones personalizadas que optimizan la eficiencia y generan valor real para tu organización.',
    image: '/assets/images/services/Consultoría-TI.png'
  },
  {
    id: 3,
    title: 'Desarrollo Ágil de Software',
    icon: '⚡',
    description: 'Metodologías ágiles para resultados rápidos',
    detailedDescription:
      'Desarrollamos software de alta calidad utilizando metodologías ágiles como Scrum y Kanban. Nuestro enfoque iterativo te permite ver resultados tangibles desde las primeras semanas, con entregas continuas que se adaptan a tus necesidades cambiantes.',
    image: '/assets/images/services/Desarrollo-Ágil-Software.png'
  },
  {
    id: 4,
    title: 'Fábrica de Software',
    icon: '🏭',
    description: 'Producción eficiente y escalable de software',
    detailedDescription:
      'Operamos como una fábrica de software completa, desde el diseño hasta el mantenimiento. Contamos con procesos estandarizados y equipos multidisciplinarios que garantizan entregas consistentes, escalables y de alta calidad para proyectos de cualquier tamaño.',
    image: '/assets/images/services/Fábrica-Software.png'
  },
  {
    id: 5,
    title: 'Testing de Software',
    icon: '✅',
    description: 'Garantía de calidad en cada proyecto',
    detailedDescription:
      'Aseguramos la calidad de tu software mediante pruebas exhaustivas y automatizadas. Nuestros QA engineers utilizan las mejores herramientas y prácticas del mercado para detectar y prevenir defectos, garantizando que tu producto cumpla con los más altos estándares de calidad.',
    image: '/assets/images/services/Testing-Software.png'
  }
];

export const methodologiesData: Methodology[] = [
  {
    id: 1,
    name: 'Scrum',
    icon: '🔄',
    description:
      'Metodología ágil que organiza el trabajo en sprints cortos para entregas incrementales y rápidas.'
  },
  {
    id: 2,
    name: 'Kanban',
    icon: '📋',
    description: 'Sistema visual que optimiza el flujo de trabajo y mejora la eficiencia del equipo.'
  },
  {
    id: 3,
    name: 'DevOps',
    icon: '⚙️',
    description:
      'Integración continua entre desarrollo y operaciones para despliegues más rápidos y seguros.'
  },
  {
    id: 4,
    name: 'Design Thinking',
    icon: '💡',
    description: 'Enfoque centrado en el usuario para crear soluciones innovadoras y efectivas.'
  }
];

export const processStepsData: ProcessStep[] = [
  {
    id: 1,
    step: '01',
    title: 'Análisis',
    description: 'Comprendemos tus necesidades y definimos los requisitos del proyecto.',
    icon: '🔍'
  },
  {
    id: 2,
    step: '02',
    title: 'Diseño',
    description: 'Creamos la arquitectura y el diseño de la solución tecnológica.',
    icon: '🎨'
  },
  {
    id: 3,
    step: '03',
    title: 'Desarrollo',
    description: 'Construimos la solución con código limpio y mejores prácticas.',
    icon: '💻'
  },
  {
    id: 4,
    step: '04',
    title: 'Testing',
    description: 'Garantizamos la calidad mediante pruebas exhaustivas y automatizadas.',
    icon: '✅'
  },
  {
    id: 5,
    step: '05',
    title: 'Entrega',
    description: 'Desplegamos la solución y brindamos soporte continuo.',
    icon: '🚀'
  }
];

export const teamRolesData: string[] = [
  'Jefe de Proyectos',
  'Analistas Programadores',
  'Especialistas UX / UI',
  'Ingeniero en Sistemas',
  'Analistas Funcionales',
  'Arquitectos de Software',
  'Diseñadores',
  'Consultores',
  'DBA',
  'DevOps'
];

export const workSectorsData: string[] = [
  'Gobierno',
  'Seguro',
  'Retail',
  'Banca',
  'Empresas de Servicios',
  'Centro de Atención'
];

export const sectorsWithInfoData: SectorInfo[] = [
  {
    name: 'Gobierno',
    description:
      'Desarrollamos soluciones tecnológicas para instituciones gubernamentales, mejorando la eficiencia y transparencia de los servicios públicos.',
    position: { x: 5, y: 10 },
    tooltipPosition: { x: 50, y: 100 },
    arrowPath: {
      viewBox: '0 0 1000 800',
      d: 'M 100 40 L 420 220'
    },
    arrowHead: {
      d: 'M 420 220 L 400 215 L 405 220 L 400 225 Z'
    },
    image: '/assets/images/gobiernno2.png'
  },
  {
    name: 'Seguro',
    description:
      'Sistemas especializados para compañías de seguros, optimizando procesos de gestión de pólizas, reclamaciones y análisis de riesgos.',
    position: { x: 95, y: 10 },
    tooltipPosition: { x: 50, y: 100 },
    arrowPath: {
      viewBox: '0 0 1000 800',
      d: 'M 900 40 L 580 220'
    },
    arrowHead: {
      d: 'M 580 220 L 600 215 L 595 220 L 600 225 Z'
    },
    image: '/assets/images/seguro.png'
  },
  {
    name: 'Banco',
    description:
      'Soluciones bancarias seguras y escalables, incluyendo sistemas de transacciones, banca digital y gestión de cuentas con altos estándares de seguridad.',
    position: { x: 97, y: 50 },
    tooltipPosition: { x: 50, y: 100 },
    arrowPath: {
      viewBox: '0 0 1000 800',
      d: 'M 960 400 L 580 400'
    },
    arrowHead: {
      d: 'M 580 400 L 600 400 L 595 395 L 600 400 L 595 405 Z'
    },
    image: '/assets/images/banco.png'
  },
  {
    name: 'Centro de Atención',
    description:
      'Plataformas de atención al cliente y gestión de contact centers, mejorando la experiencia del usuario y la eficiencia operativa.',
    position: { x: 95, y: 90 },
    tooltipPosition: { x: 50, y: 0 },
    arrowPath: {
      viewBox: '0 0 1000 800',
      d: 'M 900 760 L 580 580'
    },
    arrowHead: {
      d: 'M 580 580 L 600 585 L 595 580 L 600 575 Z'
    },
    image: '/assets/images/atencion-cliente.png'
  },
  {
    name: 'Empresas de Servicios',
    description:
      'Sistemas personalizados para empresas de servicios, automatizando procesos y mejorando la gestión de operaciones y clientes.',
    position: { x: 5, y: 90 },
    tooltipPosition: { x: 50, y: 0 },
    arrowPath: {
      viewBox: '0 0 1000 800',
      d: 'M 100 760 L 420 580'
    },
    arrowHead: {
      d: 'M 420 580 L 400 575 L 405 580 L 400 585 Z'
    },
    image: '/assets/images/automatizacion.png'
  },
  {
    name: 'Retail',
    description:
      'Soluciones para el sector retail, incluyendo sistemas de punto de venta, gestión de inventario y plataformas de e-commerce.',
    position: { x: 3, y: 50 },
    tooltipPosition: { x: 50, y: 100 },
    arrowPath: {
      viewBox: '0 0 1000 800',
      d: 'M 100 100 L 325 150'
    },
    arrowHead: {
      d: 'M 300 400 L 320 400 L 315 395 L 320 400 L 315 405 Z'
    },
    image: '/assets/images/retail.png'
  }
];

export const publicSectorItemsData: SectorCarouselItem[] = [
  {
    name: 'SUNAT',
    description: '',
    image: ''
  },
  {
    name: 'SUTRAN',
    description: '',
    image: ''
  },
  {
    name: 'Fondo Mivivienda',
    description: '',
    image: ''
  },
  {
    name: 'Ministerios del Perú',
    description: '',
    image: ''
  },
  {
    name: 'OSIPTEL',
    description: '',
    image: ''
  }
];

export const privateSectorItemsData: SectorCarouselItem[] = [
  {
    name: 'Makro',
    description: '',
    image: ''
  },
  {
    name: 'Neuma Peru',
    description: '',
    image: ''
  },
  {
    name: 'Universidad Continental',
    description: '',
    image: ''
  },
  {
    name: 'Nova broker',
    description: '',
    image: ''
  },
  {
    name: 'urbanova',
    description: '',
    image: ''
  },
  {
    name: 'statkraft',
    description: '',
    image: ''
  }
];

export const howWeDoItemsData: HowWeDoItem[] = [
  {
    id: 1,
    number: '01',
    title: 'SCRUM',
    shortDescription: 'Metodología ágil para entregas rápidas',
    description:
      'Organizamos el trabajo en sprints cortos para entregas incrementales y rápidas. Permite adaptación continua y mejora constante del proceso de desarrollo.',
    icon: '🔄',
    image: '/assets/images/scrum.png',
    features: [
      'Sprints de 2-4 semanas',
      'Reuniones diarias',
      'Retrospectivas continuas',
      'Product Owner dedicado'
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'KANBAN',
    shortDescription: 'Sistema visual de flujo de trabajo',
    description:
      'Optimizamos el flujo de trabajo y mejoramos la eficiencia del equipo. Facilita la visualización del progreso y la identificación de cuellos de botella.',
    icon: '📋',
    image: '/assets/images/kanban.png',
    features: ['Visualización en tiempo real', 'Límites de trabajo en progreso', 'Flujo continuo', 'Mejora continua']
  },
  {
    id: 3,
    number: '03',
    title: 'DEVOPS',
    shortDescription: 'Integración continua y despliegues',
    description:
      'Integración continua entre desarrollo y operaciones para despliegues más rápidos y seguros. Automatización de procesos y mejora continua de la infraestructura.',
    icon: '⚙️',
    image: '/assets/images/devops.png',
    features: ['CI/CD automatizado', 'Infraestructura como código', 'Monitoreo continuo', 'Despliegues seguros']
  },
  {
    id: 4,
    number: '04',
    title: 'DESIGN THINKING',
    shortDescription: 'Enfoque centrado en el usuario',
    description:
      'Creamos soluciones innovadoras y efectivas centradas en el usuario. Proceso iterativo que combina empatía, creatividad y racionalidad.',
    icon: '💡',
    image: '/assets/images/DESIGN-THINKING.png',
    features: ['Empatía con usuarios', 'Prototipado rápido', 'Iteración constante', 'Validación temprana']
  },
  {
    id: 5,
    number: '05',
    title: 'ANÁLISIS',
    shortDescription: 'Comprensión profunda de necesidades',
    description:
      'Comprendemos tus necesidades y definimos los requisitos del proyecto. Realizamos un análisis exhaustivo para garantizar que la solución cumpla con tus objetivos.',
    icon: '🔍',
    image: '/assets/images/Analisis.jpg',
    features: [
      'Análisis de requisitos',
      'Documentación técnica',
      'Arquitectura de solución',
      'Planificación detallada'
    ]
  },
  {
    id: 6,
    number: '06',
    title: 'DISEÑO',
    shortDescription: 'Arquitectura y prototipos',
    description:
      'Creamos la arquitectura y el diseño de la solución tecnológica. Desarrollamos prototipos y wireframes que guían el proceso de desarrollo.',
    icon: '🎨',
    image: '/assets/images/Diseño.jpg',
    features: [
      'Arquitectura de software',
      'Diseño UX/UI',
      'Prototipos interactivos',
      'Sistemas escalables'
    ]
  },
  {
    id: 7,
    number: '07',
    title: 'DESARROLLO',
    shortDescription: 'Código limpio y mejores prácticas',
    description:
      'Construimos la solución con código limpio y mejores prácticas. Implementamos metodologías ágiles para garantizar entregas incrementales y de calidad.',
    icon: '💻',
    image: '/assets/images/Desarrollo.jpg',
    features: ['Código limpio', 'Pair programming', 'Code reviews', 'Testing unitario']
  },
  {
    id: 8,
    number: '08',
    title: 'TESTING',
    shortDescription: 'Calidad y validación exhaustiva',
    description:
      'Garantizamos la calidad mediante pruebas exhaustivas y automatizadas. Validamos que la solución cumpla con todos los requisitos y estándares de calidad.',
    icon: '✅',
    image: '/assets/images/TESTING.png',
    features: ['Testing automatizado', 'QA exhaustivo', 'Pruebas de rendimiento', 'Validación de requisitos']
  },
  {
    id: 9,
    number: '09',
    title: 'ENTREGA',
    shortDescription: 'Despliegue y soporte continuo',
    description:
      'Desplegamos la solución y brindamos soporte continuo. Aseguramos una transición fluida y proporcionamos mantenimiento y actualizaciones.',
    icon: '🚀',
    image: '/assets/images/ENTREGA.png',
    features: ['Despliegue seguro', 'Documentación completa', 'Capacitación', 'Soporte 24/7']
  }
];

export const techCategoriesData: TechCategory[] = [
  {
    id: 'web',
    label: 'WEB',
    items: ['Angular', 'React', 'Node.js', 'PHP', 'C#', '.NET', 'TypeScript', 'HTML', 'CSS']
  },
  {
    id: 'movil',
    label: 'MÓVIL',
    items: ['Android Studio', 'React Native', 'Flutter', 'Kotlin', 'Swift']
  },
  {
    id: 'tecnologia',
    label: 'TECNOLOGÍA',
    items: ['Azure', 'AWS', 'Docker', 'Power BI', 'Kubernetes', 'PostgreSQL', 'SQL Server']
  }
];
