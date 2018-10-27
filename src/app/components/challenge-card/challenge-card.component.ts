import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss']
})
export class ChallengeCardComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit() {
  }

  private _challenge = '';
  private _type = '';

  @Input()
   set challenge(challenge: string) {
    this._challenge = challenge;
   }

   @Input()
   set type(type: string) {
    this._type = type;
    console.log(type);
   }

  get challenge(): string { return this._challenge; }
  get type(): string { return this._type; }

  openChallengePage(done, locked, type, id){
    this.router.navigate(["/challenge-details"]);
  }



}
