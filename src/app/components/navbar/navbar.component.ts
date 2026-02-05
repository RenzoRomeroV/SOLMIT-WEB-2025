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

    // En la parte superior de la página (incluido al cargar) el navbar siempre visible
    if (currentScrollY < 80) {
      this.isNavbarVisible = true;
      this.isScrolled = currentScrollY > 20;
      this.lastScrollY = currentScrollY;
      return;
    }

    const queHacemosSection = document.getElementById('que-hacemos');

    if (queHacemosSection) {
      const sectionTop = queHacemosSection.offsetTop;
      const sectionHeight = queHacemosSection.offsetHeight;
      const isInSection = currentScrollY >= sectionTop - 100 && currentScrollY < sectionTop + sectionHeight;

      const scrollingDown = currentScrollY > this.lastScrollY;
      const scrollingUp = currentScrollY < this.lastScrollY;

      if (isInSection || currentScrollY > sectionTop) {
        if (scrollingDown) {
          this.isNavbarVisible = false;
        } else if (scrollingUp) {
          this.isNavbarVisible = true;
        }
      } else {
        this.isNavbarVisible = true;
      }
    }

    this.isScrolled = currentScrollY > 20;
    this.lastScrollY = currentScrollY;
  }

  ngOnInit() {
    this.lastScrollY = window.scrollY;
    this.isScrolled = window.scrollY > 20;
    // Navbar visible al cargar y en la parte superior
    this.isNavbarVisible = true;
    this.onWindowScroll();
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

