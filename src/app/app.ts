import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// 👇 on importe ton composant de test
import { TestolympicComponentComponent } from './features/olympics/components/testolympic-component/testolympic-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TestolympicComponentComponent // 👈 ajout essentiel ici
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // ⚠️ ici c’est style**Urls** au pluriel
})
export class App {
  protected readonly title = signal('telesport4');
}
