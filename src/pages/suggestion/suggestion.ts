import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'suggestion',
  templateUrl: 'suggestion.html'
})
export class SuggestionFormPage {
  constructor(public navCtrl: NavController,
              public navParams : NavParams,
              public alertCtrl: AlertController
  ) {}

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Submit?',
      message: 'Do you agree to submit the Suggestion, you name and contact details will be recorded',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.popTo(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }
}
