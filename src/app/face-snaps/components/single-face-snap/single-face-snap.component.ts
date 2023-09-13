import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapService } from 'src/app/core/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
 
  faceSnap$!: Observable<FaceSnap>;
  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
  ) {}
  // On utilise ! pour promettre à typescript qu'on vas initialiser les valeurs


  etatSnapped!: string;
  ifSnapped!: number;
  //Il faut tjr initialiser dans le ngOnit
  ngOnInit() {
    this.ifSnapped = 0;
    this.etatSnapped = 'Oh Snap !';

    //+ c'est le cast d'une chaîne en un number
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFindSnapById(snapId);
  }

  //Cette methode pour incrementer le nombre de snap à chaque clic
  //Le nom de méthode qui commence par "on" signale que cette méthode répond à un événement
  onAddSnap(faceSnapId : number) {
   if (this.etatSnapped === 'Oh Snap !') {
    this.faceSnap$ =  this.faceSnapService.snapFaceSNapById(faceSnapId, 'snap').pipe(
      tap(() => {
        this.etatSnapped = 'Oops, un Snap!';
      })
    )
      
   } else {
     this.faceSnap$ = this.faceSnapService.snapFaceSNapById(faceSnapId, 'unsnap').pipe(
         tap(() => {
          this.faceSnap$ = this.faceSnapService.getFindSnapById(faceSnapId)
           this.etatSnapped = 'Oh Snap !';
          
         })
       )
       
   } 
  }
}
