import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './core/models/face-snap.model';
import { Title } from '@angular/platform-browser';
import { Observable, concatMap, delay, filter, interval, map, mergeMap, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval$ !: Observable<String> // le type entre <> est le type ce que l'observable emet.

  /* ngOnInit(){
     // toute variable finie par $ c'est un observable
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ?
        'je suis '+value+ ' et je suis pair': 'je suis '+value+' et je suis impair'),
      tap(text => this.logger(text))
    )


  } */

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() {
    /* interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      concatMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe(); */
  }





















  
  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }


  logger(text : string){
    console.log('Log: '+text)
  }
  
  





}


