import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/features/services/http.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent {
  loginRes: { message: string; id: number } = { message: '', id: 0 };
  loginReq: { email: string; password: string } = { email: '', password: '' };

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private toastService: ToastService,
    private httpService: HttpService
  ) {}

  onSubmit() {
    if (this.form.invalid) {
      this.toastService.showToast('Please enter email and password.');
      return;
    }
    const data = this.form.value;
    this.loginReq = {
      email: data.email,
      password: data.password,
    };
    console.log(this.loginReq);
    this.httpService
      .post<{ message: string; id: number }>(
        'Student/StudentLogin',
        this.loginReq
      )
      .subscribe({
        next: (response) => {
          this.loginRes = response;
          sessionStorage.setItem('id', String(response.id));
          this.toastService.showToast('Login Successful.');
        },
        error: () => {
          this.toastService.showToast('Login failed. Please Retry');
        },
        complete: () => {
          this.router.navigate(['student/home']);
        },
      });
  }

  onRoute(path: any) {
    this.router.navigate([path]);
  }
}
