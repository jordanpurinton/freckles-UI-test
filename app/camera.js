var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ionic_angular_1 = require('ionic-angular');
var AppPage = (function () {
    function AppPage(platform, _zone) {
        this._zone = _zone;
        this.platform = platform;
        this.images = [];
    }
    AppPage.prototype.takePhoto = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                quality: 80,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: Camera.EncodingType.JPEG,
                saveToPhotoAlbum: false
            };
            // https://github.com/apache/cordova-plugin-camera#module_camera.getPicture
            navigator.camera.getPicture(function (data) {
                var imagedata = "data:image/jpeg;base64," + data;
                _this._zone.run(function () { return _this.images.unshift({
                    src: imagedata
                }); });
            }, function (error) {
                alert(error);
            }, options);
        });
    };
    AppPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/app/app.html'
        })
    ], AppPage);
    return AppPage;
})();
exports.AppPage = AppPage;
//# sourceMappingURL=camera.js.map