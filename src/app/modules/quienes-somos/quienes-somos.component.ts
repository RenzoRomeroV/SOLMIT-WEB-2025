import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  inject,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(24px)' }),
        animate('700ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(32px)' }),
        animate('800ms 200ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class QuienesSomosComponent implements OnInit, OnDestroy, AfterViewInit {
  private el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;
  private countIntervals: ReturnType<typeof setInterval>[] = [];

  statYears = signal(0);
  statPeople = signal(0);
  statProjects = signal(0);
  statClients = signal(0);
  statsAnimated = signal(false);

  readonly statTargets = { years: 10, people: 30, projects: 100, clients: 50 };
  readonly duration = 1800;
  readonly steps = 40;

  readonly sparks = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 2.5 + Math.random() * 3
  }));

  readonly valores = [
    { title: 'Innovación', icon: '💡', description: 'Buscamos constantemente nuevas tecnologías y metodologías para ofrecer soluciones de vanguardia.' },
    { title: 'Agilidad', icon: '⚡', description: 'Trabajamos con metodologías ágiles que nos permiten adaptarnos rápidamente a las necesidades del cliente.' },
    { title: 'Calidad', icon: '🏆', description: 'Mantenemos los más altos estándares de calidad certificados internacionalmente.' },
    { title: 'Compromiso', icon: '🤝', description: 'Estamos comprometidos con el éxito de nuestros clientes y el crecimiento continuo de nuestro equipo.' },
    { title: 'Transparencia', icon: '🔒', description: 'Mantenemos una comunicación clara y transparente en todos nuestros procesos y proyectos.' },
    { title: 'Mejora continua', icon: '🌱', description: 'Nos enfocamos en el aprendizaje constante y la mejora continua de nuestros procesos.' }
  ];

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            if (el.id === 'historia-section' && !this.statsAnimated()) {
              this.statsAnimated.set(true);
              this.animateCounters();
            }
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );
  }

  ngAfterViewInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    const sections = host.querySelectorAll('[data-observe-section]');
    sections.forEach((el) => this.observer?.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.countIntervals.forEach(clearInterval);
  }

  private animateCounters(): void {
    const { years, people, projects, clients } = this.statTargets;
    this.animateCounter(this.statYears, years);
    this.animateCounter(this.statPeople, people);
    this.animateCounter(this.statProjects, projects);
    this.animateCounter(this.statClients, clients);
  }

  private animateCounter(sig: ReturnType<typeof signal<number>>, target: number): void {
    const stepDuration = this.duration / this.steps;
    const increment = target / this.steps;
    let current = 0;
    const id = setInterval(() => {
      current += increment;
      if (current >= target) {
        sig.set(target);
        clearInterval(id);
        return;
      }
      sig.set(Math.floor(current));
    }, stepDuration);
    this.countIntervals.push(id);
  }
}
