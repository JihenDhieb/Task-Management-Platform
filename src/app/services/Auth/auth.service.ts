import { Injectable } from '@angular/core';
import { User } from '../../models/user.model'; // Assure-toi que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Déclare la propriété users comme un tableau d'objets User
  private users: User[] = []; // Liste des utilisateurs inscrits

  // Méthode pour l'inscription d'un utilisateur
  signup(user: User): boolean {
    this.users.push(user); // Ajoute l'utilisateur à la liste
    return true; // Retourne true si l'inscription réussit
  }

  // Méthode pour la connexion d'un utilisateur
  login(user: { email: string; password: string }): boolean {
    // Vérifie si l'utilisateur existe dans la liste
    const existingUser = this.users.find(u => u.email === user.email && u.password === user.password);
    return !!existingUser; // Retourne true si l'utilisateur existe
  }
  forgetpassword(email:string): boolean {
    const existingUser=this.users.find(u => u.email === email);
    if(existingUser){
      console.log(`Un email de réinitialisation a été envoyé à : ${email}`);
      return true;
    }
    return false;
  }
}
