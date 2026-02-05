import { Component, OnInit, AfterViewInit, OnDestroy, HostListener, ViewChild, ElementRef, signal } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('footerRef') footerRef!: ElementRef<HTMLElement>;
  hasReachedFooter = signal(false);
  private cursorElement: HTMLElement | null = null;
  private mouseOverHandler: ((event: MouseEvent) => void) | null = null;
  private footerObserver: IntersectionObserver | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initCustomCursor();
  }

  ngAfterViewInit() {
    const footer = this.footerRef?.nativeElement;
    if (footer) {
      this.footerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.hasReachedFooter.set(entry.isIntersecting);
          });
        },
        { threshold: 0.1, rootMargin: '0px' }
      );
      this.footerObserver.observe(footer);
    }
  }

  ngOnDestroy() {
    this.footerObserver?.disconnect();
    this.footerObserver = null;
    if (this.mouseOverHandler) {
      document.removeEventListener('mouseover', this.mouseOverHandler);
      this.mouseOverHandler = null;
    }
  }

  private initCustomCursor() {
    // Obtener el elemento del cursor
    this.cursorElement = document.querySelector('.custom-cursor');
    
    if (this.cursorElement) {
      // Posicionar el cursor en el centro inicialmente
      this.cursorElement.style.left = window.innerWidth / 2 + 'px';
      this.cursorElement.style.top = window.innerHeight / 2 + 'px';
    }
    
    // Usar delegación de eventos para elementos que se cargan dinámicamente
    this.mouseOverHandler = (e: MouseEvent) => {
      if (!this.cursorElement) {
        this.cursorElement = document.querySelector('.custom-cursor');
      }
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest(
          'a, button, .service-button, .navbar-link, .navbar-cta-button, .cta-link, .how-card'
        )
      ) {
        this.cursorElement?.classList.add('hover');
      } else {
        this.cursorElement?.classList.remove('hover');
      }
    };
    document.addEventListener('mouseover', this.mouseOverHandler);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.cursorElement) {
      this.cursorElement = document.querySelector('.custom-cursor');
    }
    if (this.cursorElement) {
      requestAnimationFrame(() => {
        if (this.cursorElement) {
          this.cursorElement.style.left = event.clientX + 'px';
          this.cursorElement.style.top = event.clientY + 'px';
        }
      });
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.cursorElement?.classList.add('click');
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.cursorElement?.classList.remove('click');
  }
}
