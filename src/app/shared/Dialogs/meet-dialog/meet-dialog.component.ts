import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-meet-dialog',
  templateUrl: './meet-dialog.component.html',
  styleUrls: ['./meet-dialog.component.css'],
})
export class MeetDialogComponent {
  canDismiss = false;
  facName: string = 'Abdul Hameed';

  constructor(
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Meet appointment request has been cancel',
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  async dismiss() {
    this.modalController.dismiss();
    setTimeout(async () => {
      await this.presentToast();
    }, 300);
  }
}
