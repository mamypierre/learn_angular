import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from './model/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() snap!: FaceSnap;
  isSnaped!: boolean;
  titleSnap!: string;


  ngOnInit(){
    this.isSnaped = false;
    this.titleSnap = "Oh Snaps!";
  }

  onSnap(){
    if(!this.isSnaped){
      this.snap.snaps++;
      this.titleSnap = "Oh Snaps! thanks";
    }else{
      this.snap.snaps--;
      this.titleSnap = "Oh Snaps! Sad";
    }
    this.isSnaped = !this.isSnaped ;
    
  }
}
