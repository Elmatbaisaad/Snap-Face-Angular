import { interval, tap, take, Subject, takeUntil, Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapService } from 'src/app/core/services/face-snaps.service';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit /* OnDestroy */{

  faceSnaps !: FaceSnap[];
  private destroy$ !: Subject<boolean>
  faceSnaps$ !: Observable<FaceSnap[]>

  constructor(private faceSnapService: FaceSnapService){

  }
  ngOnInit(){

    //this.faceSnaps = this.faceSnapService.getAllFaceSnaps()
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();




    //this.destroy$ = new Subject<boolean>();
    //interval(1000).pipe(
      // take() permet de definir les nombre d'émission 
      //take(3),
      //takeUntil(this.destroy$),
      //tap(value => console.log(value))
   // ).subscribe()
  }

 /*  ngOnDestroy(){
      this.destroy$.next(true);
  } */
}
