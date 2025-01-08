import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { MyProfileComponent } from '../my-profile/my-profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent {
  constructor(
    private menuController: MenuController,
    private router: Router,
    private modalController: ModalController
  ) {}

  toggleMenu() {
    console.log('Toggle menu clicked');
    this.menuController.toggle('end');
  }

  onRoute(path: any) {
    this.router.navigate([path]);
    console.log(path);
  }

  onLogout(path: any) {
    this.onRoute(path);
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
}
