import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

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
  imports: [CommonModule, RouterLink],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServiciosComponent implements OnInit, OnDestroy, AfterViewInit {
  private el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  readonly sparks = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 2.5 + Math.random() * 3
  }));

  processSteps: ProcessStep[] = [
    { id: 1, step: '01', title: 'Consulta', description: 'Analizamos tus necesidades y objetivos', icon: '📞' },
    { id: 2, step: '02', title: 'Propuesta', description: 'Diseñamos una solución personalizada', icon: '📋' },
    { id: 3, step: '03', title: 'Desarrollo', description: 'Ejecutamos el proyecto con metodologías ágiles', icon: '💻' },
    { id: 4, step: '04', title: 'Entrega', description: 'Entregamos la solución y brindamos soporte', icon: '🚀' }
  ];

  benefits = [
    { icon: '⚡', label: 'Entrega rápida', description: 'Trabajamos con metodologías ágiles para que veas resultados desde las primeras semanas. Entregas incrementales y feedback constante.' },
    { icon: '🎯', label: 'Enfoque personalizado', description: 'Cada proyecto es único. Analizamos tu contexto y diseñamos soluciones a la medida, sin plantillas genéricas.' },
    { icon: '🔒', label: 'Calidad certificada', description: 'Procesos y estándares que garantizan software estable y mantenible. Testing riguroso y buenas prácticas de desarrollo.' },
    { icon: '💼', label: 'Equipo experto', description: 'Profesionales con experiencia en múltiples industrias y tecnologías. Formación continua y certificaciones.' },
    { icon: '📞', label: 'Soporte continuo', description: 'Acompañamiento después del lanzamiento. Mantenimiento, mejoras y soporte técnico cuando lo necesites.' },
    { icon: '💰', label: 'Precios competitivos', description: 'Estructura de costos transparente y opciones flexibles. Máximo valor sin sacrificar calidad.' }
  ];

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) (entry.target as HTMLElement).classList.add('in-view');
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );
  }

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    host.querySelectorAll('[data-observe-section]').forEach((el) => this.observer?.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
