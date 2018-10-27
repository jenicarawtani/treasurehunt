import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { QuestionsPage } from '../questions/questions.page';
import { ContactPage } from '../contact/contact.page';
import { InfoPage } from '../info/info.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'questions',
        outlet: 'questions',
        component: QuestionsPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path: 'info',
        outlet: 'info',
        component: InfoPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
