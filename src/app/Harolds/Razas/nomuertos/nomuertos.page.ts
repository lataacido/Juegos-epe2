import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-nomuertos',
  templateUrl: './nomuertos.page.html',
  styleUrls: ['./nomuertos.page.scss'],
})
export class NomuertosPage implements OnInit {

  constructor(public navController: NavController,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  Harolds(){
    this.navController.navigateForward('Harolds')
  }

}
