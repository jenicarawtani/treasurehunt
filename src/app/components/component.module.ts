import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChallengeCardComponent } from './challenge-card/challenge-card.component';


@NgModule({
  declarations: [
    ChallengeCardComponent
  ],
  exports: [
    ChallengeCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule {}