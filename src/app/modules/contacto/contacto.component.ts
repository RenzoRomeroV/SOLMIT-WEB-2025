import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="placeholder-container">
      <h1>CONTACTO</h1>
      <p>Esta sección estará disponible próximamente.</p>
    </div>
  `,
  styles: [`
    .placeholder-container {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      font-size: 2.5rem;
      color: #1e40af;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      color: #6b7280;
    }
    @media (max-width: 480px) {
      .placeholder-container { padding: 1.5rem 1rem; }
      h1 { font-size: 1.75rem; }
      p { font-size: 1rem; }
    }
  `]
})
export class ContactoComponent {}

