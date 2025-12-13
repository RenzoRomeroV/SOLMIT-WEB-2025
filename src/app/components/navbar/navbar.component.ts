import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isScrolled = false;
  isNavbarVisible = true;
  lastScrollY = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;
    const queHacemosSection = document.getElementById('que-hacemos');
    
    // Detectar si se ha llegado a la sección "¿QUÉ HACEMOS?"
    if (queHacemosSection) {
      const sectionTop = queHacemosSection.offsetTop;
      const sectionHeight = queHacemosSection.offsetHeight;
      const isInSection = currentScrollY >= sectionTop - 100 && currentScrollY < sectionTop + sectionHeight;
      
      // Detectar dirección del scroll
      const scrollingDown = currentScrollY > this.lastScrollY;
      const scrollingUp = currentScrollY < this.lastScrollY;
      
      if (isInSection || currentScrollY > sectionTop) {
        // Si estamos en la sección o más abajo
        if (scrollingDown) {
          // Ocultar navbar al hacer scroll hacia abajo
          this.isNavbarVisible = false;
        } else if (scrollingUp) {
          // Mostrar navbar al hacer scroll hacia arriba
          this.isNavbarVisible = true;
        }
      } else {
        // Si estamos antes de la sección, siempre mostrar el navbar
        this.isNavbarVisible = true;
      }
    }
    
    this.isScrolled = currentScrollY > 20;
    this.lastScrollY = currentScrollY;
  }

  ngOnInit() {
    this.onWindowScroll();
    // Asegurar que isScrolled sea false al inicio
    this.isScrolled = false;
    this.lastScrollY = window.scrollY;
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}

