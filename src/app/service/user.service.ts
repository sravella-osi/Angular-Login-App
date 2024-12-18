import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  private username : string = "";
  private email : string = "";
  private password : string = "";
  private logged : boolean = false;

  setUsername(name: string): void {
    this.username = name;
  }

  getUsername(): string {
    return this.username;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
  
  setPassword(password: string): void {
    this.password = password;
  }

  getPassword(): string {
    return this.password;
  }

  loggedOn(): void {
    this.logged = true;
  }

  loggedOut(): void {
    this.logged = false;
  }

  constructor() { }
}
