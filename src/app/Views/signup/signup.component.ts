import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/Auth/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullname: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  onSignup() {
    const user: User = {   id: '',  
      fullname: this.fullname, 
      email: this.email, 
      password: this.password, 
      tasks: [] };
    if (this.authService.signup(user)) {
      console.log('Signup success');
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Signup failed';
    }
  }
}
