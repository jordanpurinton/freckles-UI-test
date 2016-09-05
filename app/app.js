import { App, Platform, IonicApp, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { SettingsPage } from './pages/settings/settings';
import {Page} from 'ionic-angular';
import {NgZone} from 'angular2/core';
import {Camera} from 'ionic-native';

@App({
    templateUrl: 'build/app.html',

    config: {}
})
export class DefaultPage {
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
            {title: 'Home', component: TabsPage},
            {title: 'Settings', component: SettingsPage}
        ];

        this.rootPage = TabsPage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            window.splashscreen.show();
        });
    }

    openPage(page) {
        this.menu.close()
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }


    takePicture() {
        console.log('click');
        Camera.getPicture({
            cameraDirection: Camera.Direction.FRONT,
            destinationType: Camera.DestinationType.FILE_URI,
            correctOrientation: true,
            saveToPhotoAlbum: true,
            targetWidth: 1000,
            targetHeight: 1000

        }).then((imageData) => {
            // imageData is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.saveToPhotoAlbum(imageData);
        }, (err) => {
            console.log(err);
        });
    }


}
