import { IonicModule } from '@ionic/angular';
import { BudgetComponent } from './budget.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component:BudgetComponent}]),
    IonicModule
  ]
})
export class BudgetModule { }
