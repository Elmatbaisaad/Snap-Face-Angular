import { Router } from '@angular/router';

import { Observable, map, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapService } from 'src/app/core/services/face-snaps.service';


@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit{



  snapForm !: FormGroup
  faceSnapPreview$ !: Observable<FaceSnap>
  urlRegex !: RegExp
  constructor(private formBuilder : FormBuilder, private faceSnapService : FaceSnapService, private router : Router){}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm  = this.formBuilder.group({
      title : [null, Validators.required],
      description : [null, Validators.required],
      imageUrl : [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location : [null]
    },
    {
      updateOn : 'blur'
    })
    // Observer s'il y'a des changement sur le snapForm
    // Mais normalement l'observable emis un FaceSnap à la fin 
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(

      // il nous a manqué les autres champs pour qu'on pui retourner un FaceSnap
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id:0,
        snaps:0
      }))
    );
  }

  onSubmitForm(){
   this.faceSnapService.addFaceSnap(this.snapForm.value).pipe(
    // tap() pour toute action qui sera effectuée aprés une requête
    tap(()=> this.router.navigateByUrl('/facesnaps'))
   ).subscribe();
    
    
  }

}
