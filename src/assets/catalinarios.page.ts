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
 
  constructor(public navController : NavController, public alertCtrl: AlertController ) { }
  ngOnInit() {
  }
  paginas(){
    this.navController.navigateForward('paginas')
  }
  tabs(){
    this.navController.navigateForward('tabs')
  }
 

  async verSeleccion(){
    let alert = await this.alertCtrl.create({
      message: this.perso,
      buttons:['OK']
    });
    alert.present();
  }
  }
