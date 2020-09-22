import { ActivityModule } from './../pages/activity/activity.module';
import { BudgetModule } from './../pages/budget/budget.module';
import { AccountModule } from '../pages/account/account.module';
import { DashboardModule } from './../pages/dashboard/dashboard.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DashboardModule,
    AccountModule,
    BudgetModule,
    ActivityModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
