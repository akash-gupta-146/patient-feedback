import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComplaintFormPage } from '../complaints/complaintForm';
import { SuggestionFormPage } from '../suggestion/suggestion';

@Component({
  selector: 'survey',
  templateUrl: 'survey.html'
})
export class SurveyPage {

  constructor(public navCtrl: NavController) {}

}
