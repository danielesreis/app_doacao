import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Globals } from '../../app/globals';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [Globals]
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, globals: Globals, private camera: Camera, private fileTransfer: FileTransfer, private actionSheetCtrl: ActionSheetController) {
  	Globals.title = "Perfil"

  }
  get user(){
  	return Globals.user;
  }

  
  getPictureChoose(){
    let sourceType: number;
         let actionSheet = this.actionSheetCtrl.create({
           title: 'Modify your album',
           buttons: [
             {
               text: 'Camera',
               handler: () => {
                 sourceType = this.camera.PictureSourceType.CAMERA;
                 this.getPicture(sourceType);
               }
             },{
               text: 'Gallery',
               handler: () => {
                 sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
                 this.getPicture(sourceType);
               }
             },{
               text: 'Cancel',
               role: 'cancel'
             }
           ]
         });
         actionSheet.present();
  }

    getPicture(sourceType){
      const options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       this.upload(imageData);
      
      }, (err) => {
       // Handle error
      });
    }
   

   upload(file) {
     const transfer: FileTransferObject = this.fileTransfer.create();
     let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: Globals.user.id+'.jpg',
        mimeType: "multipart/form-data",
        params : {'fileName': Globals.user.id+'.jpg', 'id': Globals.user.id}
     }
     transfer.upload(file, Globals.apiUrl+"updateAvatar.php", options)
      .then((data) => {
        alert(data.response);
         Globals.user.foto = Globals.apiUrl+'avatar/'+Globals.user.id+'.jpg';
         localStorage.setItem("user", JSON.stringify(Globals.user));
      }, (err) => {
        alert(err.body);
      })
   }

  ionViewDidEnter(){
    this.menu.swipeEnable(true, 'menu_lateral');
  }
}
