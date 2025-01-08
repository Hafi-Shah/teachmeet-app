import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FacultyCardsComponent } from './home/faculty-cards/faculty-cards.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';
import { ViewFacultyDetailComponent } from './home/faculty-cards/view-faculty-detail/view-faculty-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    FacultyCardsComponent,
    MyProfileComponent,
    NotificationComponent,
    SettingsComponent,
    ViewFacultyDetailComponent,
  ],
  exports: [FacultyCardsComponent],
  imports: [CommonModule, StudentRoutingModule, SharedModule],
})
export class StudentModule {}
