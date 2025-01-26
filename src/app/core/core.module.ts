import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [CoreComponent, SettingsComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule, FormsModule],
})
export class CoreModule {}
