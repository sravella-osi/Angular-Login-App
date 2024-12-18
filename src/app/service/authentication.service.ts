import { Injectable } from '@angular/core';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private registeredUsers : User[] = [];
  private loggedUsers : User[] = [];
  private currentUser = new User;

  registerUser(user : User){
    this.registeredUsers?.push(user);
  }

  logInUser(user : User){
    this.loggedUsers?.push(user);
    this.currentUser = user;
  }

    validateUser(v_user : User): boolean {

      for(const tmp of this.registeredUsers ) {
        if(tmp.getEmail() === v_user.getEmail() &&  tmp.getPassword() === v_user.getPassword()) {
          console.log(tmp);
          v_user.setUsername(tmp.getUsername());
          console.log(v_user);
          return true;
        }
      }
      
      console.log("Unauthorised User. Please register to login.");
      return false;
    }

  getCurrentUser(): User {
    return this?.currentUser;
  }

  constructor() { }
}
