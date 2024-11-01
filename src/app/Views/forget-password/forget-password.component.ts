import { Component } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
email :string =''
constructor(private authService:AuthService){}
onForget() {
  if (this.authService.forgetpassword(this.email)) {
    alert('Un email de réinitialisation a été envoyé.'); // ou une notification plus élégante
  } else {
    alert('Adresse email non trouvée.');
  }
}
}
