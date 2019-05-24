import { Component, OnInit } from '@angular/core';

import {NavController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-monstros',
  templateUrl: './monstros.page.html',
  styleUrls: ['./monstros.page.scss'],
})
export class MonstrosPage implements OnInit {

  constructor(public navController : NavController,public alertCrtl : AlertController ) { }

  ngOnInit() {
  }

  Comprar1 : boolean;
  Comprar2 : boolean;
  Comprar3 : boolean;
  Comprar4 : boolean;
  verResul1 : any;

  async verComprar1(){

    if(this.Comprar1){

    }else{
      
      let alert = await this.alertCrtl.create({
        header: 'Comprar Monster Hunter: World',
     
        message:'Su precio de venta es de CLP$ 37.999',
        inputs : [
          {
            name :'37.999',
            type : 'number',
            placeholder : 'Numero 1'
          }
        ],
        buttons: [
          {
            text : 'Aceptar',
            handler : (dato4) => {
              console.log(dato4.number1);
            //handler : (acepta) =>{console.log('Aceptó');
          }
          },{
            text : 'Cancelar',
            handler : (cancelo) =>{console.log('No gracias');}
          }
        ]
      });
      alert.present();
    
    }

  }
  
  async verComprar2(){

    if(this.Comprar2){

    }else{
      
      let alert = await this.alertCrtl.create({
        header: 'Comprar Monster Hunter: World Deluxe Edition PACK (?) ',
        subHeader : '¡Compra este pack para ahorrar un 6% en los 2 artículos!',
        message:'<ion-img src="/assets/compra2.png"></ion-img><BR>-6% Tu precio: CLP$ 44.573',
        buttons: [
          {
            text : 'Aceptar',
            handler : (acepta) =>{console.log('Aceptó');}
          },{
            text : 'Cancelar',
            handler : (cancelo) =>{console.log('No gracias');}
          }
        ]
      });
      alert.present();
    
    }

  }
  
  async verComprar3(){

    if(this.Comprar3){

    }else{
      
      let alert = await this.alertCrtl.create({
        header: 'Comprar Monster Hunter: World - Additional Gesture Bundle 2 PACK (?) ',
        subHeader : '¡Compra este pack para ahorrar un 37% en los 4 artículos!',
        message:'<ion-img src="/assets/compra3.png"></ion-img><BR>-37% Tu precio: CLP$ 3.272',
        buttons: [
          {
            text : 'Aceptar',
            handler : (acepta) =>{console.log('Aceptó');}
          },{
            text : 'Cancelar',
            handler : (cancelo) =>{console.log('No gracias');}
          }
        ]
      });
      alert.present();
    
    }

  }
  async verComprar4(){

    if(this.Comprar4){

    }else{
      
      let alert = await this.alertCrtl.create({
        header: 'Comprar Monster Hunter: World - Additional Sticker Set Bundle 1 PACK (?) ',
        subHeader : '¡Compra este pack para ahorrar un 24% en los 2 artículos!',
        message:'<ion-img src="/assets/compra4.png"></ion-img><BR>-24% Tu precio:  CLP$ 1.974 ',
        buttons: [
          {
            text : 'Aceptar',
            handler : (acepta) =>{console.log('Aceptó');}
          },{
            text : 'Cancelar',
            handler : (cancelo) =>{console.log('No gracias');}
          }
        ]
      });
      alert.present();
    
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
