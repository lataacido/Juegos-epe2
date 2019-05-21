import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-catalinarios',
  templateUrl: './catalinarios.page.html',
  styleUrls: ['./catalinarios.page.scss'],
})
export class CatalinariosPage implements OnInit {

 
  constructor(public navController : NavController ) { }
  ngOnInit() {
  }
  paginas(){
    this.navController.navigateForward('paginas')
  }

}
