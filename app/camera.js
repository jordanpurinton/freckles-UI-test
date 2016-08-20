import {Page} from 'ionic-angular';
import {NgZone} from 'angular2/core';
import {Camera} from 'ionic-native';


@Page({
    templateUrl: 'build/pages/app/app.html'
})
    export class HomePage {
    public base64Image: string;

    constructor() {

    }

    takePicture(){
        console.log('click');
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
            // imageData is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
        });
    }
}