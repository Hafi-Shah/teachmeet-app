import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/features/services/http.service';
export interface StudentById {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  mobileNumber: string;
  description: string;
  gender: string;
  department: string;
  status: boolean;
}

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  standalone: false,
})
export class MyProfileComponent implements OnInit {
  studData!: StudentById;
  id = sessionStorage.getItem('id');
  constructor(
    private modalController: ModalController,
    private http: HttpService
  ) {}
  async dismiss() {
    this.modalController.dismiss();
  }

  getStudData(): void {
    this.http
      .get<StudentById>(
        'Student/GetStudentDetailById',
        new HttpParams().set('id', String(this.id))
      )
      .subscribe({
        next: (res) => {
          this.studData = res;
        },
      });
  }
  ngOnInit(): void {
    this.getStudData();
  }
}
