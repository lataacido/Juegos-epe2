import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-pagame',
  templateUrl: './pagame.page.html',
  styleUrls: ['./pagame.page.scss'],
})
export class PagamePage implements OnInit {

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
}
