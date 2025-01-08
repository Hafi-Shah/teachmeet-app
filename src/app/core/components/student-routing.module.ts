import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationComponent } from './notification/notification.component';
import { ViewFacultyDetailComponent } from './home/faculty-cards/view-faculty-detail/view-faculty-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'myProfile', component: MyProfileComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'view-fac-detail', component: ViewFacultyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
