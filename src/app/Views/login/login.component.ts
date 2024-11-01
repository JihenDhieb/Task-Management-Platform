import { Component } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';
// Pas besoin d'importer User si tu ne l'utilises pas
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

// Créer une interface pour login, sans fullname
interface LoginData {
    email: string;
    password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Vérifie le nom du fichier
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  onLogin() {
    const user: LoginData = { email: this.email, password: this.password }; // Utilise LoginData ici
    if (this.authService.login(user)) {
      console.log('Login success');
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
