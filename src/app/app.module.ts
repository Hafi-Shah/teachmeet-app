import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { IonicModule, MenuController } from '@ionic/angular';
import { ToastService } from './shared/services/toast.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    HttpClientModule,
  ],
  providers: [MenuController, ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
