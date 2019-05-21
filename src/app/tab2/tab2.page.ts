import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navController : NavController, public alertController: AlertController){}

  paginas(){
    this.navController.navigateForward('paginas')
  }

  pagame(){
    this.navController.navigateForward('pagame')
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Muchas gracias',
      subHeader: 'Tu aporte nos ayuda mucho',
      message: 'Sigue visitando la app',
      buttons: ['Cerrar']
    });

    await alert.present();
  }
}
