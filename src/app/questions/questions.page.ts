import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-questions',
  templateUrl: 'questions.page.html',
  styleUrls: ['questions.page.scss']
})
export class QuestionsPage {

 challenges: {};

 objectKeys = Object.keys;

  constructor(
    private router: Router,
    public challengeService: ChallengesService
  ){}

  ngOnInit(){
    this.challenges = this.challengeService.getChallenges();
  }

}