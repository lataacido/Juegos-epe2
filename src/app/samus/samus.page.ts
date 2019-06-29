import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-samus',
  templateUrl: './samus.page.html',
  styleUrls: ['./samus.page.scss'],
})
export class SamusPage implements OnInit {

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
