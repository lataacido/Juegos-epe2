import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public navController : NavController ){}
//metodos para navegar entre paginas
  paginas(){
    this.navController.navigateForward('paginas')
  }

  pagame(){
    this.navController.navigateForward('pagame')
  }
  
  tabs(){
    this.navController.navigateForward('tabs')
  }
}
