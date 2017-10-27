import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComplaintFormPage } from '../complaints/complaintForm';
import { SuggestionFormPage } from '../suggestion/suggestion';
import { SurveyPage } from '../survey/survey';
import { AppreciateFormPage } from '../appreciate/appreciateForm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: { title: string; description: string; shape: string; icon: string; color: string; }[];

  constructor(public navCtrl: NavController) {
    this.options = [
      {
        title: 'Survey',
        description: 'lorem ipsum lorem ipsum lorem ipsum',
        shape: 'assets/img/shape1.png',
        icon: 'assets/img/surveyIcon.png',
        color: 'red'
      },
      {
        title: 'Complaint',
        description: 'lorem ipsum lorem ipsum lorem ipsum',
        shape: 'assets/img/shape2.png',
        icon: 'assets/img/complaintIcon.png',
        color: 'blue'
      },
      {
        title: 'Suggest',
        description: 'lorem ipsum lorem ipsum lorem ipsum',
        shape: 'assets/img/shape3.png',
        icon: 'assets/img/suggesticon.png',
        color: 'blue'
      },
      {
        title: 'Appreciate',
        description: 'lorem ipsum lorem ipsum lorem ipsum',
        shape: 'assets/img/shape4.png',
        icon: 'assets/img/appreciateIcon.png',
        color: 'blue'
      }
    ]
  }

  openModule(a){
    if ( a.title == 'Complaint'){
      this.navCtrl.push(ComplaintFormPage);
    }
    if ( a.title == 'Suggest'){
      this.navCtrl.push(SuggestionFormPage);
    }
    if ( a.title == 'Survey'){
      this.navCtrl.push(SurveyPage);
    }
    if ( a.title == 'Appreciate'){
      this.navCtrl.push(AppreciateFormPage);
    }    
    // else if (a.title  == 'Survey')
    //   this.navCtrl.push(SurveyPage);
    // else if (a.title  == 'Suggest')
    //   this.navCtrl.push(SuggestionFormPage);
    // else if (a.title == 'Appreciate')
    //   this.navCtrl.push(AppreciateFormPage);
  }

}
