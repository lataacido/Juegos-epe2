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

accion1:boolean;
arcade1:boolean;
estrategia1:boolean;
deporte1:boolean;
simulacion1:boolean;
rpg1:boolean;
peleas1:boolean;

  paginas(){
    this.navController.navigateForward('paginas')
  }

  pagame(){
    this.navController.navigateForward('pagame')
  }

  login(){
    this.navController.navigateForward('login')
  }
 
  
  //controladores para mostrar toast
  async accion() {
    if(this.accion1){

    }else{
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
}


  async arcade() {
    if(this.arcade1){

    }else{
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
}


  async estrategia() {
    if(this.estrategia1){

    }else{
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
}

  async deporte() {
    if(this.deporte1){

    }else{
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
}

  async simulacion() {
    if(this.simulacion1){

    }else{
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
  }
  async rpg() {
    if(this.rpg1){

    }else{
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
}
  async peleas() {
    if(this.peleas1){

    }else{
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
}
