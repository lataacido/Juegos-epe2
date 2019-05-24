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

  async verComprar1(){

    if(this.Comprar1){

    }else{
      
      let alert = await this.alertCrtl.create({
        header: 'Anjanath - Monster Hunter World',
        subHeader : 'El Anjanath patrulla el Bosque Antiguo en busca de su comida favorita, Aptonoth. Este monstruo beligerante atacará cualquier cosa sin la menor provocación.',
        message:'<ion-img src="/assets/anjanath.jpg"></ion-img>',
        buttons:['Cerrar']
      });
      alert.present();
    
    }

  }
  
  async verComprar2(){

    if(this.Comprar2){

    }else{
      
      let alert = await this.alertCrtl.create({
        header: 'Nergigante - Monster Hunter World',
        subHeader : 'Un terrible dragón anciano que aparece cuando otros ancianos están cerca. Su inclinación por la destrucción está bien documentada',
        message:'<ion-img src="/assets/nergigante.jpg"></ion-img>',
        buttons:['Cerrar']
      });
      alert.present();
    
    }

  }
  
  async verComprar3(){

    if(this.Comprar3){

    }else{
      
      let alert = await this.alertCrtl.create({
        header: 'Diablos - Monster Hunter World',
        subHeader : 'El Diablos es un Wyvern Volador que domina zonas desérticas, fue introducido en Monster Hunter. ',
        message:'<ion-img src="/assets/Diablos.jpg"></ion-img>',
        buttons:['Cerrar']
      });
      alert.present();
    
    }

  }
  async verComprar4(){

    if(this.Comprar4){

    }else{
      
      let alert = await this.alertCrtl.create({
        header: 'Diablos - Monster Hunter World',
        subHeader : 'El Diablos es un Wyvern Volador que domina zonas desérticas, fue introducido en Monster Hunter. ',
        message:'<ion-img src="/assets/Diablos.jpg"></ion-img>',
        buttons:['Cerrar']
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
