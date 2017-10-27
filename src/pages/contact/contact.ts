import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contacts: { name: string; contact: string; }[];

  constructor(public navCtrl: NavController) {
    this.contacts = [
      {name:'Dr. Armaan Malik', contact:'+91 9630394300' },
      {name:'Dr. Ridhima Gupta', contact:'+91 9384209833' },
      {name:'Dr. Ayush Khurana', contact:'+91 9283784300' },
      {name:'Dr. Palak Shukla', contact:'+91 9893487283' },
      {name:'Dr. Sneha Joshi', contact:'+91 9827384777' },
      {name:'Dr. Dhruv Drishti', contact:'+91 9892839844' },
      ]
  }

}
