import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-felipe',
  templateUrl: './felipe.page.html',
  styleUrls: ['./felipe.page.scss'],
})
export class FelipePage implements OnInit {

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
