import { Component, OnInit } from '@angular/core';

import {NavController} from '@ionic/angular';
import {AlertController,ToastController} from '@ionic/angular';

@Component({
  selector: 'app-monstros',
  templateUrl: './monstros.page.html',
  styleUrls: ['./monstros.page.scss'],
})
export class MonstrosPage implements OnInit {

  constructor(public navController : NavController,public alertCrtl : AlertController ,public toastController: ToastController ) { }

  ngOnInit() {
  }

  Comprar1 : boolean;
  Comprar2 : boolean;
  Comprar3 : boolean;
  Comprar4 : boolean;
  verResul1 : any;
  verResul2 : any;
  verResul3 : any;
  verResul4 : any;

  async verComprar1(){

    if(this.Comprar1){

    }else{
      
      const toast = await this.toastController.create({
        header: 'Compraste Monster Hunter: World',
     
        message:'Su precio de venta es de CLP$ 37.999',
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

  }
  
  async verComprar2(){

    if(this.Comprar2){

    }else{
      
      const toast = await this.toastController.create({
        header: 'Compraste Monster Hunter: World Deluxe Edition PACK (?) ',
        message:'¡Compra este pack para ahorrar un 6% en los 2 artículos!  -6% Tu precio: CLP$ 44.573',
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

  }
  
  async verComprar3(){

    if(this.Comprar3){

    }else{
      
      const toast = await this.toastController.create({
        header: 'Compraste Monster Hunter: World - Additional Gesture Bundle 2 PACK (?)',
        message:' ¡Compra este pack para ahorrar un 37% en los 4 artículos! -37% Tu precio: CLP$ 3.272',
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

  }

  async verComprar4(){

    if(this.Comprar4){

    }else{
      
      const toast = await this.toastController.create({
        header: 'Compraste Monster Hunter: World - Additional Sticker Set Bundle 1 PACK (?) ',
        message:'¡Compra este pack para ahorrar un 24% en los 2 artículos!  -24% Tu precio:  CLP$ 1.974 ',
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

  }
  paginas(){
    this.navController.navigateForward('paginas')
  }
  
  tabs(){
    this.navController.navigateForward('tabs')
  }
  
  pagame(){
    this.navController.navigateForward('pagame')
  }
}
