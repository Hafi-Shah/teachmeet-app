import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MeetDialogComponent } from 'src/app/shared/Dialogs/meet-dialog/meet-dialog.component';

import { MyProfileComponent } from '../../my-profile/my-profile.component';
import { ViewFacultyDetailComponent } from './view-faculty-detail/view-faculty-detail.component';
import { HttpService } from 'src/app/features/services/http.service';
import { ToastService } from 'src/app/shared/services/toast.service';
export interface FacultyCardsRes {
  id: number;
  firstName: string;
  lastName: string;
  status: boolean;
  title: string;
  profileImage: string;
}

@Component({
  selector: 'app-faculty-cards',
  templateUrl: './faculty-cards.component.html',
  styleUrls: ['./faculty-cards.component.css'],
  standalone: false,
})
export class FacultyCardsComponent implements OnInit {
  searchTerm: string = '';
  facCardsRes!: FacultyCardsRes[];
  constructor(
    private modalController: ModalController,
    private router: Router,
    private http: HttpService,
    private toastService: ToastService
  ) {}

  getFacultyCards() {
    this.http.get<FacultyCardsRes[]>('Faculty/GetFacultyCards').subscribe({
      next: (res) => {
        this.facCardsRes = res;
        console.log(this.facCardsRes);
      },
      error(err) {
        console.error(err);
      },
    });
  }

  async openMeetDialog(facId: number, status: boolean) {
    if (!status) {
      this.toastService.showToast('this facutly is currenty offline.');
      return;
    }
    const modal = await this.modalController.create({
      component: MeetDialogComponent,
      componentProps: {
        facultyId: facId,
      },
    });
    return await modal.present();
  }

  async viewFacDetail(id: any) {
    const modal = await this.modalController.create({
      component: ViewFacultyDetailComponent,
      componentProps: {
        facultyId: id,
      },
    });
    return await modal.present();
  }

  onRoute(path: any) {
    this.router.navigate([path]);
    console.log(path);
  }

  ngOnInit(): void {
    this.getFacultyCards();
  }
}
