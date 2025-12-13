import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  private cursorElement: HTMLElement | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Asegurar scroll al top en cada cambio de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

    // Inicializar cursor personalizado
    this.initCustomCursor();
  }

  ngOnDestroy() {
    // Cleanup si es necesario
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
            document.addEventListener('mouseover', (e) => {
              if (!this.cursorElement) {
                this.cursorElement = document.querySelector('.custom-cursor');
              }
              const target = e.target as HTMLElement;
              if (target.tagName === 'A' || 
                  target.tagName === 'BUTTON' || 
                  target.closest('a, button, .service-button, .navbar-link, .navbar-cta-button, .cta-link, .how-card')) {
                this.cursorElement?.classList.add('hover');
              } else {
                this.cursorElement?.classList.remove('hover');
              }
            });
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
