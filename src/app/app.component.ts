import { Component, OnInit} from '@angular/core';
import { FaceSnap } from './face-snap/model/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  mySnap!: FaceSnap;
  mySnap1!: FaceSnap;

  ngOnInit(): void {
    this.mySnap  = new FaceSnap('title Test', 'Description Test', new Date(), 0, "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg", "Title image");
    this.mySnap1 = new FaceSnap('title Test1', 'Description Test', new Date(), 2, "https://pixabay.com/get/g6ab986c39050d4263377fb5d1679211b861b286651a84139e8ae5297644072ac1e881ec83d671ac2be4aece7a68dc846d95f5488700188540da1d9c384ce6e74a807c4cbe39329cd58268c83d502286d_1920.jpg", "Title image");
  }
}
