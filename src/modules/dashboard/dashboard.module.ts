import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ]
})
export class DashboardModule {}
