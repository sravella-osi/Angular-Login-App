import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  private username : string | null = null ;
  private email : string | null = null;
  private password : string | null = null;
  private logged : boolean = false;

  setUsername(name: string): void {
    this.username = name;
  }

  getUsername(): string | null {
    return this.username;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getEmail(): string | null {
    return this.email;
  }
  
  setPassword(password: string): void {
    this.password = password;
  }

  getPassword(): string | null {
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
