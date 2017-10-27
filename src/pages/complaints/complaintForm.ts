import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'complaintForm',
  templateUrl: 'complaintForm.html'
})
export class ComplaintFormPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) { }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Submit?',
      message: 'Do you agree to submit the complaint, you name and contact details will be recorded for future process',
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
