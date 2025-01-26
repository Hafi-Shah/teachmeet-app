import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { HttpService } from 'src/app/features/services/http.service';
import { GetStudentByIdRes } from 'src/app/features/models/res/get-student-by-id-res';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  studentId = sessionStorage.getItem('id');
  studentData!: GetStudentByIdRes;
  constructor(
    private menuController: MenuController,
    private router: Router,
    private modalController: ModalController,
    private http: HttpService
  ) {}

  toggleMenu() {
    console.log('Toggle menu clicked');
    this.menuController.toggle('end').then((isOpen) => {
      console.log('Menu toggled, now open:', isOpen);
    });
  }

  onRoute(path: any) {
    this.router.navigate([path]);
    this.menuController.close();
    setTimeout(() => {
      window.location.reload();
    });
  }

  onLogout(path: any) {
    this.router.navigate([path]);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
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
        },
        error: (err) => {
          console.error('Error fetching student data:', err);
        },
      });
  }
  async myProfileComponent() {
    const modal = await this.modalController.create({
      component: MyProfileComponent,
      componentProps: {
        // Pass any props if needed
      },
    });
    return await modal.present();
  }

  ngOnInit(): void {
    this.getStudentData();
  }
}
