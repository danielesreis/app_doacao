 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../globals';
import { User } from '../user';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';





@Injectable()
export class ImagemService {
	
  constructor(private fileTransfer: FileTransfer, private camera: Camera) { }

  getPicture(option):Promise<any>{
  		let sourceType: number;
  		switch (option) {
  			case "camera":
  				sourceType = this.camera.PictureSourceType.CAMERA;
  				break;
  			case "galeria":
  				sourceType = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
  				break;
  		}
      const options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      return this.camera.getPicture(options).then(result => {return result;}, error => {alert("paradaerrada");});
    }
   

   upload(file, action, name):Promise<any> {
     const transfer: FileTransferObject = this.fileTransfer.create();
     let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: name,
        mimeType: "multipart/form-data",
        params : {'fileName': name}
     }
     return transfer.upload(file, Globals.apiUrl+action+".php", options)
      .then((data) => {
        if(JSON.parse(data.response)){
           return Promise.resolve(JSON.parse(data.response));
         }
      }, (err) => {
      	return Promise.resolve(false);
      	//return Promise.resolve(Observable.throw(err.body?err.body:"Ocorreu um erro, verifique sua internet e tente novamente!"));
      })
   }

}
