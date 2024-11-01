import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importer RouterOutlet

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Utiliser RouterOutlet pour la navigation
  standalone: true,
  imports: [RouterOutlet] // Ajouter RouterOutlet aux imports
})
export class AppComponent {}
