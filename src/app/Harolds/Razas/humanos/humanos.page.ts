import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-humanos',
  templateUrl: './humanos.page.html',
  styleUrls: ['./humanos.page.scss'],
})
export class HumanosPage implements OnInit {

  constructor(public navController: NavController,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  Harolds(){
    this.navController.navigateForward('Harolds')
  }
  
}
