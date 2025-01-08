import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent {
  constructor(private router: Router) {}

  onRoute(path: any) {
    this.router.navigate([path]);
    console.log(path);
  }
}
