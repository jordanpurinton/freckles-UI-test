import {Page, NavController} from 'ionic-angular';
import {ActionSheet} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/tabtwo/tabtwo.html',
})
export class tab2Root {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  showActionSheet() {
    let actionSheet = ActionSheet.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Free Version',
          style: 'destructive',
          handler: () => {
            console.log('Free Version clicked');
          }
        }, {
          text: 'Premium Version',
          handler: () => {
            console.log('Premium Version clicked');
          }
        }, {
          text: 'Ultimate Edition',
          style: 'cancel',
          handler: () => {
            console.log('Ultimate Edition clicked');
          }
        }
      ]
    });
    this.nav.present(actionSheet);
  }
}
