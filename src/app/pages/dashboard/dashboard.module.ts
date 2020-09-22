import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DashboardComponent}]),
    IonicModule,
  ]
})
export class DashboardModule { }
