import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Import IonicModule from Ionic
import { MeetDialogComponent } from './Dialogs/meet-dialog/meet-dialog.component';

@NgModule({
  declarations: [],
  exports: [ReactiveFormsModule, FormsModule, IonicModule, CommonModule], // Export IonicModule
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CommonModule,
  ], // Include IonicModule
})
export class SharedModule {}
