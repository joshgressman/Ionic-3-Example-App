import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HelloPage } from '../hello/hello';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  show(){
    let modal = this.modalCtrl.create(HelloPage);
    modal.present();
    modal.onDidDismiss((data) => {
      console.log(data);
    });
  }

  goTo(page) {
    if (page == 'about') {
      this.navCtrl.push(AboutPage);
    } else if (page == 'contact') {
      this.navCtrl.push(ContactPage);
    }
  }

  back() {
    if(this.navCtrl.length() >= 2) {
      this.navCtrl.pop();
    }
  }

}
