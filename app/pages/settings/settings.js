import {Page, Platform, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
    shareFB(message, subject, file, link) {
        console.log('facebook share function fired');
    }
    shareTwitter(message, subject, file, link) {
        console.log('twitter share function fired');
    }
    sendFrecklePhoto(image) {
        console.log('send freckle photo function fired');
    }
    reportBug(){
        console.log('report bug function fired');
    }
    termsPrivacy(){
        console.log('terms of privacy function fired');
    }

}
