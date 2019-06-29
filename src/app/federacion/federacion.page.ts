import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-federacion',
  templateUrl: './federacion.page.html',
  styleUrls: ['./federacion.page.scss'],
})
export class FederacionPage implements OnInit {

  constructor(public navController : NavController) { }

  edgardhenriquez(){
    this.navController.navigateForward('edgardhenriquez')
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

  ngOnInit() {
  }

}