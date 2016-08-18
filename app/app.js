import { App, Platform, IonicApp, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { SettingsPage } from './pages/settings/settings';
import { ProfilePage } from './pages/profile/profile';

import {Page, NavController, Platform} from 'ionic-angular';
import {NgZone} from 'angular2/core';

declare var Camera:any;

@Page({
    templateUrl: 'build/pages/page1/page1.html',
})

export class Page1 {

    _zone: any;
    platform:any;
    images: Array<{src: String}>;

    constructor(platform:Platform, _zone : NgZone) {
        this._zone = _zone;
        this.platform = platform;
        this.images = [];
    }


@App({
    templateUrl: 'build/app.html',
    config: {}
})
export class MyApp {
    static get parameters() {
        return [
            [IonicApp],
            [Platform],
            [MenuController]
        ];
    }

    constructor(app, platform, menu) {
        // set up our app
        this.app = app;
        this.platform = platform;
        this.menu = menu;
        this.initializeApp();

        this.pages = [
            { title: 'Tabs Page', component: TabsPage },
            { title: 'My Account', component: ProfilePage },
            { title: 'Settings', component: SettingsPage }
        ];

        this.rootPage = TabsPage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        this.menu.close()
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }
}
