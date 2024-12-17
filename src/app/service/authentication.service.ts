import { Injectable } from '@angular/core';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private registeredUsers : User[] = [];
  private loggedUsers : User[] = [];
  private username: string | null = null;
  private currentUser = new User;

  registerUser(user : User){
    this.registeredUsers?.push(user);
  }

  logInUser(user : User){
    this.loggedUsers?.push(user);
    this.currentUser = user;
  }

    validateUser(v_user : User): boolean {
      const check = this.registeredUsers?.find( user => user.getEmail() === v_user.getEmail() &&  user.getPassword() === v_user.getPassword() );
      
      if (typeof check === "undefined" ) {
        console.log("Unauthorised User. Please register to login.");
        return false;
      }
      v_user = check;
      return true;
    }

  setUsername(name: string): void {
    this.username = name;
  }

  getUsername(): string | null {
    return this.username;
  }

  getCurrentUser(): User {
    return this?.currentUser;
  }

  constructor() { }
}
