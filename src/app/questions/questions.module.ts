import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionsPage } from './questions.page';
import { ComponentsModule } from '../components/component.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: QuestionsPage }])
  ],
  declarations: [QuestionsPage]
})
export class QuestionsPageModule {}
