import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { QuestionsPageModule } from '../questions/questions.module';
import { HomePageModule } from '../home/home.module';
import { InfoPageModule } from '../info/info.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    QuestionsPageModule,
    ContactPageModule,
    InfoPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
