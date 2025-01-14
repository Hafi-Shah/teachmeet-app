// toast.service.ts
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async showToast(message: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: 'top',
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
        },
      ],
    });

    await toast.present();
  }
}
