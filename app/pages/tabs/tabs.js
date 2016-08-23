import {Page} from 'ionic-angular';
import {tab1Root} from '../ultimate/tabone';
import {tab2Root} from '../premium/tabtwo';
import {tab3Root} from '../free/tabthree';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    this.tab1Root = tab1Root;
    this.tab2Root = tab2Root;
    this.tab3Root = tab3Root;
  }
}