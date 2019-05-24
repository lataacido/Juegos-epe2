import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-catalinarios',
  templateUrl: './catalinarios.page.html',
  styleUrls: ['./catalinarios.page.scss'],
})
export class CatalinariosPage implements OnInit {
 perso : string;
 public boton:boolean=false;
  constructor(public navController : NavController, public alertCtrl: AlertController ) { }
  ngOnInit() {
  }
  paginas(){
    this.navController.navigateForward('paginas')
  }
  tabs(){
    this.navController.navigateForward('tabs')
  }
 kerrigan : string="kerrigan";
//muestra un mensaje de alerta indicando que es parte de los personajes principales.
  async verSeleccion(){
    let alert = await this.alertCtrl.create({
      header: this.perso,
      message:"Personaje Principal de StarCraft",      
      buttons:['OK']
    });
    alert.present();
  }

  
  }
