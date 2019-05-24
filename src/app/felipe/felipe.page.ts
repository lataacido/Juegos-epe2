import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-felipe',
  templateUrl: './felipe.page.html',
  styleUrls: ['./felipe.page.scss'],
})
export class FelipePage implements OnInit {

  constructor(public navController: NavController,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  async enviar_select() {
    const toast = await this.toastController.create({
      header: 'GRACIAS por suscribirte!',
      message: 'Pronto te estaremos enviado las últimas noticias',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'logo-game-controller-b',

          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  paginas() {
    this.navController.navigateForward('paginas')
  }

  tabs() {
    this.navController.navigateForward('tabs')
  }
}
