import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}

  login() {
    this._auth.login(this.model).subscribe(
      (next) => {
        console.log('Logged in successfully');
        this.loggedIn = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
