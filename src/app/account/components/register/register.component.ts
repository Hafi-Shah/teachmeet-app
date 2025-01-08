import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false,
})
export class RegisterComponent {
  constructor(private router: Router) {}
  onRoute(path: any) {
    this.router.navigate([path]);
    console.log(path);
  }
}
