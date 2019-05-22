import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-estebanterrones',
  templateUrl: './estebanterrones.page.html',
  styleUrls: ['./estebanterrones.page.scss'],
})
export class EstebanterronesPage implements OnInit {

  constructor(public navController : NavController ) { }
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
