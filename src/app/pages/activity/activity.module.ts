import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';



@NgModule({
  declarations: [ActivityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:ActivityComponent}]),
    IonicModule
  ]
})
export class ActivityModule { }
