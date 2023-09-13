import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapService } from 'src/app/core/services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {


  @Input() faceSnap !: FaceSnap;
  constructor(private faceSnapService : FaceSnapService, private router : Router){

  }
  // On utilise ! pour promettre à typescript qu'on vas initialiser les valeurs
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!:number;
  imageUrl!: string;
  ifSnapped!: number;
  etatSnapped!:string;


  //Il faut tjr initialiser dans le ngOnit
  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami';
    this.createdDate = new Date();
    this.snaps = 6;
    this.ifSnapped = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.etatSnapped = 'Oh Snap !';
  }

  //Cette methode pour incrementer le nombre de snap à chaque clic
  //Le nom de méthode qui commence par "on" signale que cette méthode répond à un événement
  onAddSnap(){
    if(this.ifSnapped == 0){
      this.faceSnapService.snapFaceSNapById(this.faceSnap.id, 'snap');
      this.etatSnapped = 'Oops, un Snap!';
      this.ifSnapped++;
    }else{
      this.faceSnapService.snapFaceSNapById(this.faceSnap.id, 'unsnap') ;
      this.etatSnapped = 'Oh Snap !';
      this.ifSnapped--;
    }
    
  }


  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    console.log("click sur le snap qui y a l id " + this.faceSnap.id)
    }
    
}
