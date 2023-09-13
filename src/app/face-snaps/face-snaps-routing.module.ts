import { AuthGuard } from './../core/guards/auth.guard';
import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";



const routes : Routes = [
    {path: 'create', component : NewFaceSnapComponent, canActivate : [AuthGuard]},
        { path : '', component: FaceSnapListComponent, canActivate : [AuthGuard]},
        {path: ':id',component: SingleFaceSnapComponent, canActivate : [AuthGuard]},

]

@NgModule({
    imports: [
        //Pour charger just ce qu'on veut et FORCHILD parcequ'on est dans un module enfant
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class FaceSnapsRoutingModule{}