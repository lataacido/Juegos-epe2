import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-edgardhenriquez',
  templateUrl: './edgardhenriquez.page.html',
  styleUrls: ['./edgardhenriquez.page.scss'],
})
export class EdgardhenriquezPage implements OnInit {

 
  constructor(public navController : NavController ) { }
  ngOnInit() {
  }
  paginas(){
    this.navController.navigateForward('paginas')
  }

}
