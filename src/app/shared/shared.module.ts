import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Import IonicModule from Ionic

@NgModule({
  declarations: [],
  exports: [ReactiveFormsModule, FormsModule, IonicModule], // Export IonicModule
  imports: [CommonModule, ReactiveFormsModule, FormsModule, IonicModule], // Include IonicModule
})
export class SharedModule {}
