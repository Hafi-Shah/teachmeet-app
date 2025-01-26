import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/features/services/http.service';
export interface FacultyDataById {
  faculty: {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    title: string;
    department: number;
    email: string;
    password: string;
    gender: string;
    profileImage: string;
    mobileNumber: string;
    status: boolean;
  };
  officeTimings: OfficeTiming[];
}

export interface OfficeTiming {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
  label?: string;
}

@Component({
  selector: 'app-view-faculty-detail',
  templateUrl: './view-faculty-detail.component.html',
  styleUrls: ['./view-faculty-detail.component.css'],
  standalone: false,
})
export class ViewFacultyDetailComponent implements OnInit {
  facultyData!: FacultyDataById;
  @Input() facultyId: any;
  constructor(
    private modalController: ModalController,
    private http: HttpService
  ) {}
  async dismiss() {
    this.modalController.dismiss();
  }

  getFacData(): void {
    this.http
      .get<FacultyDataById>(
        'Faculty/GetFacultyDetailById',
        new HttpParams().set('facultyId', this.facultyId)
      )
      .subscribe({
        next: (res) => {
          this.facultyData = res;
        },
      });
  }

  ngOnInit(): void {
    this.getFacData();
  }
}
