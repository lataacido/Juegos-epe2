import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
constructor(public navController : NavController, public toastController: ToastController ){}

  paginas(){
    this.navController.navigateForward('paginas')
  }

  pagame(){
    this.navController.navigateForward('pagame')
  }
  
  async accion() {
    const toast = await this.toastController.create({
      header: 'Accion',
      message: 'wow te gustan los juegos de accion',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'logo-game-controller-b',
         
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async arcade() {
    const toast = await this.toastController.create({
      header: 'Arcade',
      message: 'wow te gustan los juegos de arcade',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'logo-game-controller-b',
         
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async estrategia() {
    const toast = await this.toastController.create({
      header: 'Estrategia',
      message: 'wow te gustan los juegos de estrategia',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'logo-game-controller-b',
         
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async deporte() {
    const toast = await this.toastController.create({
      header: 'Deporte',
      message: 'wow te gustan los juegos de deporte',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'logo-game-controller-b',
         
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async simulacion() {
    const toast = await this.toastController.create({
      header: 'Simulacion',
      message: 'wow te gustan los juegos de simulacion',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'logo-game-controller-b',
         
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async rpg() {
    const toast = await this.toastController.create({
      header: 'RPG',
      message: 'wow te gustan los juegos de rpg',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'logo-game-controller-b',
         
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
  async peleas() {
    const toast = await this.toastController.create({
      header: 'Peleas',
      message: 'wow te gustan los juegos de peleas',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'logo-game-controller-b',
         
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
