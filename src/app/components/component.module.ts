import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChallengeCardComponent } from './challenge-card/challenge-card.component';


@NgModule({
  declarations: [
    ChallengeCardComponent
  ],
  exports: [
    ChallengeCardComponent
  ],
  imports: [
    IonicModule
  ]
})
export class ComponentsModule {}