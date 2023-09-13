import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  constructor(private http: HttpClient) {}



  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  addFaceSnap(formValue: {title: string;description: string;imageUrl: string;location?: string;}) : Observable<FaceSnap>{
    return this.getAllFaceSnaps().pipe(
      map(facesnaps => [...facesnaps].sort((a:FaceSnap,b:FaceSnap) => a.id - b.id)),
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      map(previousFaceSnap => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id : previousFaceSnap.id + 1 
      })),
      switchMap(newFaceMap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceMap))
    )

   
  }

  getFindSnapById(faceSnapId: number): Observable <FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
  }

  // Ici on a utiliser un type literal comme ça pour qu'on aura comme possibilité que snap ou unsnap

  snapFaceSNapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {

    return this.getFindSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType == 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
    )

  }
}
