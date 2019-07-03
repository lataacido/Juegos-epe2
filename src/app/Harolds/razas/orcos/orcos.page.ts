import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-orcos',
  templateUrl: './orcos.page.html',
  styleUrls: ['./orcos.page.scss'],
})
export class OrcosPage implements OnInit {

  constructor(public navController: NavController,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  Harolds(){
    this.navController.navigateForward('Harolds')
  }
  

}
