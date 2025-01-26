import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/features/services/http.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { HttpParams } from '@angular/common/http';
import { GetStudentByIdRes } from 'src/app/features/models/res/get-student-by-id-res';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  standalone: false,
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup | any;

  isInitialized = false;
  status: { studentId: number; status: boolean } = {
    studentId: Number(sessionStorage.getItem('id')),
    status: true,
  };

  studentData: any;

  studentId = sessionStorage.getItem('id')?.toString();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpService,
    private toastService: ToastService
  ) {}

  initializeForm() {
    this.settingsForm = this.formBuilder.group({
      status: [this.status.status],
    });
  }

  onRoute(path: any) {
    this.router.navigate([path]);
    setTimeout(() => {
      window.location.reload();
    });
  }

  statusValue() {
    this.status.status = this.settingsForm.get('status').value;
    console.log(this.status);

    this.http.post('Student/ChangeStudentStatus', this.status).subscribe({
      next: (response: any) => {
        this.toastService.showToast(response.message);
        console.log(response);
      },
      error(err) {
        console.error(err);
      },
    });
  }

  getStudentData() {
    this.http
      .get<GetStudentByIdRes>(
        'Student/GetStudentDetailById',
        new HttpParams().set('id', String(this.studentId))
      )
      .subscribe({
        next: (response) => {
          this.studentData = response;
          this.status = {
            status: response.status,
            studentId: response.id,
          };

          // Update the form value after fetching the student data
          this.settingsForm.patchValue({
            status: this.status.status,
          });

          // Set isInitialized flag to true after patching the form
          this.isInitialized = true;

          console.log(this.status);
        },
        error: (err) => {
          console.error('Error fetching student data:', err);
        },
      });
  }

  ngOnInit() {
    // Initialize the form
    this.initializeForm();

    // Fetch the student data and update the form
    this.getStudentData();
  }
}
