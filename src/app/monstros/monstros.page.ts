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
