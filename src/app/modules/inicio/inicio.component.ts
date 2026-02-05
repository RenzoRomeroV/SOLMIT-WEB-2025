import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  signal,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import {
  howWeDoItemsData,
  methodologiesData,
  privateSectorItemsData,
  publicSectorItemsData,
  processStepsData,
  sectorsWithInfoData,
  servicesData,
  slidesData,
  techCategoriesData,
  teamRolesData,
  workSectorsData
} from './inicio.data';
import {
  HowWeDoItem,
  Methodology,
  ProcessStep,
  SectorInfo,
  SectorCarouselItem,
  Service,
  Slide,
  TechCategory,
  TechCategoryId
} from './inicio.types';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px) scale(0.95)' }),
        animate('800ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class InicioComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroVideoDesktop', { static: false }) heroVideoDesktop?: ElementRef<HTMLVideoElement>;
  @ViewChild('heroVideoMobile', { static: false }) heroVideoMobile?: ElementRef<HTMLVideoElement>;
  @ViewChild('publicCarousel') publicCarousel?: ElementRef<HTMLDivElement>;
  @ViewChild('privateCarousel') privateCarousel?: ElementRef<HTMLDivElement>;
  currentSlide = signal(0);
  autoSlideInterval: any;
  private sectionObserver: IntersectionObserver | null = null;
  private serviceItemObservers: IntersectionObserver[] = [];
  private autoScrollTimers: number[] = [];
  selectedService: Service | null = null;
  isModalOpen = false;
  titleChars: string[] = 'FÁBRICA DE SOFTWARE'.split('');
  expandedCard = signal<number | null>(null);
  visibleTooltip = signal<string | null>(null);

  slides: Slide[] = slidesData;
  services: Service[] = servicesData;

  ngOnInit() {
    this.currentSlide.set(0);
    // Configurar animaciones de scroll
    this.setupScrollAnimations();
  }

  ngAfterViewInit() {
    this.startAutoScroll();
    setTimeout(() => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
      const video = isMobile ? this.heroVideoMobile : this.heroVideoDesktop;
      if (video?.nativeElement) {
        const el = video.nativeElement;
        el.muted = true;
        el.play().catch(() => {});
      }
    }, 300);
  }

  setupScrollAnimations() {
    // Usar Intersection Observer para animaciones al hacer scroll
    const observerOptions = {
      threshold: 0.01, // Activar muy temprano (cuando solo el 1% es visible)
      rootMargin: '400px 0px 0px 0px' // Activar 400px antes de que entre en el viewport
    };

    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // No desconectar para permitir animaciones repetidas si es necesario
        }
      });
    }, observerOptions);

    // Observar todas las secciones inmediatamente
    setTimeout(() => {
      const sections = document.querySelectorAll('.services-section, .how-section, .methodologies-section, .process-section, .team-section');
      sections.forEach(section => {
        this.sectionObserver?.observe(section);
        // Activar inmediatamente si ya está visible
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight + 400) {
          section.classList.add('animate-in');
        }
      });
      
      // También observar elementos individuales dentro de las secciones
      const serviceItems = document.querySelectorAll('.service-item');
      serviceItems.forEach((item, index) => {
        const itemObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('animate-in');
              }, index * 50); // Reducido de 100ms a 50ms
            }
          });
        }, { threshold: 0.05, rootMargin: '300px 0px 0px 0px' });
        this.serviceItemObservers.push(itemObserver);
        itemObserver.observe(item);
      });
    }, 100); // Reducido de 1000ms a 100ms
  }

  expandCard(cardId: number) {
    this.expandedCard.set(cardId);
  }

  collapseCard() {
    this.expandedCard.set(null);
  }

  toggleCard(cardId: number) {
    if (this.expandedCard() === cardId) {
      this.expandedCard.set(null);
    } else {
      this.expandedCard.set(cardId);
    }
  }

  showTooltip(sectorName: string) {
    this.visibleTooltip.set(sectorName);
  }

  hideTooltip() {
    this.visibleTooltip.set(null);
  }

  toggleSector(sectorName: string) {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return;
    if (this.visibleTooltip() === sectorName) {
      this.visibleTooltip.set(null);
    } else {
      this.visibleTooltip.set(sectorName);
    }
  }

  getSectorImage(): string {
    const activeSectorName = this.visibleTooltip();
    
    if (!activeSectorName) {
      return '/assets/images/traba.png';
    }
    
    const activeSector = this.sectorsWithInfo.find(s => s.name === activeSectorName);
    
    if (activeSector && activeSector.image) {
      return activeSector.image;
    }
    return '/assets/images/traba.png'; // Imagen por defecto
  }

  onImageError(event: any) {
    console.error('Error loading image:', event.target.src);
    // Si falla, intentar con la imagen por defecto
    event.target.src = '/assets/images/traba.png';
  }

  onImageLoad(event: any) {
    // Imagen cargada correctamente
  }

  // Chispas animadas para el fondo
  sparks = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3
  }));

  getArrowViewBox(position: { x: number; y: number }): string {
    // ViewBox dinámico basado en la posición
    return '0 0 1000 800';
  }

  getArrowPath(position: { x: number; y: number }): string {
    // Calcular coordenadas desde el card hacia el centro
    // El centro está en 50%, 50% del contenedor
    // Convertir porcentajes a coordenadas SVG (viewBox 1000x800)
    
    const centerX = 500; // 50% de 1000
    const centerY = 400; // 50% de 800
    const radius = 225; // Radio del círculo central (ajustado para imagen más grande)
    const cardWidth = 90; // Mitad del ancho del card (180px / 2 = 90px en coordenadas SVG aproximadas)
    
    // Posición del card en coordenadas SVG
    const cardX = (position.x / 100) * 1000;
    const cardY = (position.y / 100) * 800;
    
    // Calcular ángulo desde el card hacia el centro
    const dx = centerX - cardX;
    const dy = centerY - cardY;
    const angle = Math.atan2(dy, dx);
    
    // Punto de inicio: desde el borde del card (pegado al texto)
    // Usar el ancho del card para calcular el punto exacto del borde
    const cardOffset = cardWidth; // Offset desde el centro del card hasta su borde
    
    // Ajustes específicos para Retail (x: 3, y: 50) y Banca (x: 97, y: 50)
    if ((position.x === 3 && position.y === 50) || (position.x === 97 && position.y === 50)) {
      // Para Retail y Banca, las flechas son horizontales
      if (position.x === 3) {
        // Retail - flecha de izquierda a derecha
        // Card está en x=30 (3% de 1000), y=400 (50% de 800)
        const startX = 30 + cardWidth; // Desde el borde derecho del card
        const startY = 400; // Misma altura que el centro
        const endX = 500 - radius; // Borde izquierdo del círculo
        const endY = 400;
        return `M ${startX} ${startY} L ${endX} ${endY}`;
      } else if (position.x === 97) {
        // Banca - flecha de derecha a izquierda
        // Card está en x=970 (97% de 1000), y=400 (50% de 800)
        const startX = 970 - cardWidth; // Desde el borde izquierdo del card
        const startY = 400; // Misma altura que el centro
        const endX = 500 + radius; // Borde derecho del círculo
        const endY = 400;
        return `M ${startX} ${startY} L ${endX} ${endY}`;
      }
    }
    
    // Para los demás sectores, cálculo desde el borde del card
    const startX = cardX + Math.cos(angle) * cardOffset;
    const startY = cardY + Math.sin(angle) * cardOffset;
    
    // Punto final: borde del círculo central (pegado a la imagen)
    const endX = centerX - Math.cos(angle) * radius;
    const endY = centerY - Math.sin(angle) * radius;
    
    return `M ${startX} ${startY} L ${endX} ${endY}`;
  }

  ngOnDestroy() {
    this.stopAutoScroll();
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
      this.sectionObserver = null;
    }
    if (this.serviceItemObservers.length > 0) {
      this.serviceItemObservers.forEach(observer => observer.disconnect());
      this.serviceItemObservers = [];
    }
  }



  openModal(service: Service) {
    this.selectedService = service;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedService = null;
    document.body.style.overflow = ''; // Restaurar scroll del body
  }

  scrollToServices() {
    const element = document.getElementById('que-hacemos');
    if (element) {
      const offset = 80; // Altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  methodologies: Methodology[] = methodologiesData;
  processSteps: ProcessStep[] = processStepsData;
  teamRoles: string[] = teamRolesData;
  workSectors: string[] = workSectorsData;
  sectorsWithInfo: SectorInfo[] = sectorsWithInfoData;
  publicSectorItems: SectorCarouselItem[] = publicSectorItemsData;
  privateSectorItems: SectorCarouselItem[] = privateSectorItemsData;
  howWeDoItems: HowWeDoItem[] = howWeDoItemsData;
  techCategories: TechCategory[] = techCategoriesData;
  activeTechTab = signal<TechCategoryId>('web');
  hasSelectedTech = signal(false);

  scrollCarousel(target: 'public' | 'private', direction: number) {
    const container =
      target === 'public' ? this.publicCarousel?.nativeElement : this.privateCarousel?.nativeElement;
    if (!container) {
      return;
    }
    this.scrollByCard(container, direction);
  }

  private startAutoScroll() {
    this.stopAutoScroll();
    this.setupAutoScroll(this.publicCarousel?.nativeElement);
    this.setupAutoScroll(this.privateCarousel?.nativeElement);
  }

  private setupAutoScroll(container?: HTMLDivElement | null) {
    if (!container) {
      return;
    }
    const timerId = window.setInterval(() => {
      this.scrollByCard(container, 1, true);
    }, 3500);
    this.autoScrollTimers.push(timerId);
  }

  private scrollByCard(container: HTMLDivElement, direction: number, loop = false) {
    const card = container.querySelector<HTMLElement>('.experience-item');
    const gapValue = getComputedStyle(container).columnGap || getComputedStyle(container).gap || '0';
    const gap = Number.parseFloat(gapValue) || 0;
    const cardWidth = card?.getBoundingClientRect().width ?? 0;
    const step = Math.max(cardWidth + gap, 220);
    if (loop && container.scrollLeft + container.clientWidth >= container.scrollWidth - 8) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }
    container.scrollBy({ left: direction * step, behavior: 'smooth' });
  }

  private stopAutoScroll() {
    this.autoScrollTimers.forEach(timerId => window.clearInterval(timerId));
    this.autoScrollTimers = [];
  }

  getActiveTechItems(): string[] {
    return this.techCategories.find(category => category.id === this.activeTechTab())?.items ?? [];
  }

  getTechItemsFor(categoryId: TechCategoryId): string[] {
    return this.techCategories.find(category => category.id === categoryId)?.items ?? [];
  }

  getActiveTechLabel(): string {
    return this.techCategories.find(category => category.id === this.activeTechTab())?.label ?? '';
  }

  selectTechTab(tab: TechCategoryId) {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return;
    if (this.activeTechTab() === tab && this.hasSelectedTech()) {
      this.hasSelectedTech.set(false);
      return;
    }
    this.activeTechTab.set(tab);
    this.hasSelectedTech.set(true);
  }
}

