import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Input } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}

ngOnInit() {
  this.buttonText = 'Oh Snap!';
}

onSnap() {
  if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Oops, unSnap!';
  } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
}
}

}
