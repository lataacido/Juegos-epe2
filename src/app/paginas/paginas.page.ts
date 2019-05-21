import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.page.html',
  styleUrls: ['./paginas.page.scss'],
})
export class PaginasPage implements OnInit {

  constructor(public navController : NavController ) { }
  tabs(){
    this.navController.navigateForward('tabs')
  }
  ngOnInit() {
  }
 
  paginas(){
    this.navController.navigateForward('paginas')
  }

  pagame(){
    this.navController.navigateForward('pagame')
  }

  esteban(){
    this.navController.navigateForward('estebanterrones')
  }

  catalina(){
    this.navController.navigateForward('catalinarios')
  }

  edgard(){
    this.navController.navigateForward('edgardhenriquez')
  }

  felipe(){
    this.navController.navigateForward('felipe')
  }
}
