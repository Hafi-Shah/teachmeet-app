import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { ToastType, ToastHeading } from 'src/app/features/constants/toast-type';
import { HttpService } from 'src/app/features/services/http.service';
import { ToastService } from '../../services/toast.service';
import { SharedModule } from '../../shared.module';
export interface MeetingDetails {
  description: string;
  fromStudentId: number;
  toFacultyId: number;
  officeTime: string;
}
export interface OfficeTiming {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
  label?: string;
}

@Component({
  selector: 'app-meet-dialog',
  templateUrl: './meet-dialog.component.html',
  styleUrls: ['./meet-dialog.component.css'],
  standalone: true,
  imports: [SharedModule],
})
export class MeetDialogComponent implements OnInit {
  canDismiss = false;
  facName: string = 'Abdul Hameed';
  message = '';
  facId: number = 0;
  facTimes: OfficeTiming[] = [];

  selectedTime: { day: string; startTime: string; endTime: string } | null =
    null;
  selectedTimeIndex: number | null = null;

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private http: HttpService,
    private toastService: ToastService,
    private navParams: NavParams
  ) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Meet appointment request has been cancel',
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }
  // Fetch faculty timings
  getFacTiming() {
    this.http
      .get<OfficeTiming[]>(
        'Faculty/GetTimingsOfFacultyById',
        new HttpParams().set('facultyId', this.facId)
      )
      .subscribe({
        next: (response) => {
          this.facTimes = response;
          console.log(this.facTimes);
        },
      });
  }
  // Select time and store selected time and index
  selectTime(
    index: number,
    time: { day: string; startTime: string; endTime: string }
  ): void {
    this.selectedTimeIndex = index;
    this.selectedTime = time;
    console.log('Selected time:', time);
  }

  // Format time string
  formatTime(time: {
    day: string;
    startTime: string;
    endTime: string;
  }): string {
    return `${time.day}: start time: ${time.startTime} - end time: ${time.endTime}`;
  }
  sendRequest(): void {
    if (!this.selectedTime) {
      this.toastService.showToast('please select office time');
      return;
    }
    if (!this.message) {
      this.toastService.showToast('please enter meeting message');
      return;
    }
    const payload: MeetingDetails = {
      description: this.message,
      fromStudentId: Number(sessionStorage.getItem('id')),
      toFacultyId: this.facId,
      officeTime: this.formatTime(this.selectedTime),
    };

    console.log(payload);

    this.http
      .post('Notification/CreateStudentNotification', payload)
      .subscribe({
        next: (response: any) => {
          this.toastService.showToast(response.message);
        },
        complete: () => {
          this.modalController.dismiss();
        },
      });
  }

  async dismiss() {
    this.modalController.dismiss();
    setTimeout(async () => {
      await this.presentToast();
    }, 300);
  }

  ngOnInit(): void {
    //this.facId = this.config.data.id;
    this.facId = this.navParams.get('facultyId');
    console.log(this.facId);
    setTimeout(() => {
      this.getFacTiming();
    }, 100);
  }
}
