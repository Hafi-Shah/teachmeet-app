import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { RegisterStudentReqDTO } from 'src/app/features/models/req/register-student-req';
import { HttpService } from 'src/app/features/services/http.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false,
})
export class RegisterComponent implements OnInit {
  image = '';

  departments: any[] = [];

  genders: any[] = [];

  registerStudentReqDto!: RegisterStudentReqDTO;

  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    departmentId: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    genderId: new FormControl('', Validators.required),
    profileImage: new FormControl(''),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    description: new FormControl(''),
  });
  constructor(
    private router: Router,
    private httpService: HttpService,
    private toastService: ToastService
  ) {}
  fetchAllData(): void {
    forkJoin({
      genders: this.httpService.get<any[]>(`Application/GetGenders`),
      departments: this.httpService.get<any[]>(`Application/GetDepartments`),
    }).subscribe({
      next: ({ genders, departments }) => {
        this.genders = genders;
        this.departments = departments;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      console.error('No file selected');
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.toastService.showToast('Please Fill the required data');
      return;
    }
    const data = this.form.value;
    this.registerStudentReqDto = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      departmentId: Number(data.departmentId),
      email: data.email,
      password: data.password,
      genderId: Number(data.genderId),
      profileImage: this.image,
      mobileNumber: data.mobileNumber,
    };
    this.httpService
      .post('Student/RegisterStudent', this.registerStudentReqDto)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error(err) {
          console.error(err);
        },
        complete: () => {
          this.toastService.showToast('Student registered successfully.');
          this.router.navigate(['/login']);
        },
      });
  }

  onRoute(path: any) {
    this.router.navigate([path]);
    console.log(path);
  }

  ngOnInit(): void {
    this.fetchAllData();
  }
}
