import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  standalone: false,
})
export class MyProfileComponent {
  constructor(private modalController: ModalController) {}
  async dismiss() {
    this.modalController.dismiss();
  }
}
