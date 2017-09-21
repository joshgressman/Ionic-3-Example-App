import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page) {
         if (page === 'home') {
            this.navCtrl.push(HomePage);
         } else if (page === 'contact') {
            this.navCtrl.push(ContactPage);
         }



 }
      back() {
         if (this.navCtrl.length() >= 2) {
            this.navCtrl.pop();
         }
}

}
