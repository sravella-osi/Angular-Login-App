import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = new User;

  constructor(private authService: AuthenticationService,
    
  ) {}

  

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    
  }
}
