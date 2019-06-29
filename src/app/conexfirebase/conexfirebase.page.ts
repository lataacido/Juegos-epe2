import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-conexfirebase',
  templateUrl: './conexfirebase.page.html',
  styleUrls: ['./conexfirebase.page.scss'],
})
export class ConexfirebasePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewStudent(record) {
    return this.firestore.collection('Students').add(record);
  }
 
  read_Students() {
    return this.firestore.collection('Students').snapshotChanges();
  }
 
  update_Student(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }
}