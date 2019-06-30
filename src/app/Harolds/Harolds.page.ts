import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-Harolds',
  templateUrl: './Harolds.page.html',
  styleUrls: ['./Harolds.page.scss'],
})
export class HaroldsPage implements OnInit {

  constructor(public navController: NavController,
              public toastController: ToastController) { }


    /*PARA QUE FUNCIONE EL VIDEO HAY QUE INSTALAR ESTO: 
$ ionic cordova plugin add cordova-plugin-youtube-video-player
$ npm install @ionic-native/youtube-video-player   */
/*
EN app-routing.module.ts

  { path: 'Harolds', loadChildren: './Harolds/Harolds.module#HaroldsPageModule' },
  { path: 'humanos', loadChildren: './Harolds/Razas/humanos/humanos.module#HumanosPageModule' },
  { path: 'nomuertos', loadChildren: './Harolds/Razas/nomuertos/nomuertos.module#NomuertosPageModule' },
  { path: 'orcos', loadChildren: './Harolds/Razas/orcos/orcos.module#OrcosPageModule' },
  { path: 'nelf', loadChildren: './Harolds/Razas/nelf/nelf.module#NelfPageModule' }



*/


  ngOnInit() {
  }

  azote() {
  this.navController.navigateForward('nomuertos')
  }

  horda() {
  this.navController.navigateForward('orcos')
  }

  nnelf() {
  this.navController.navigateForward('nelf')
  }

  alianza() {
  this.navController.navigateForward('humanos')
  }


  paginas() {
    this.navController.navigateForward('paginas')
  }

  tabs() {
    this.navController.navigateForward('tabs')
  }
}
