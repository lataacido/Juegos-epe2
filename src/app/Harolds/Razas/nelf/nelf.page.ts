import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nelf',
  templateUrl: './nelf.page.html',
  styleUrls: ['./nelf.page.scss'],
})
export class NelfPage implements OnInit {

  constructor(public navController: NavController,
    public toastController: ToastController) { }

  ngOnInit() {
  }
  Harolds(){
    this.navController.navigateForward('Harolds')
  }
}
