import {Page, NavController} from 'ionic-angular';
import {ActionSheet} from 'ionic-angular';


/*
 Generated class for the TabthreePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Page({
    templateUrl: 'build/pages/free/tabthree.html',
})
export class tab3Root {
    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
    }

    showActionSheet() {
        let actionSheet = ActionSheet.create({
            title: 'Which version would you like?',
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
