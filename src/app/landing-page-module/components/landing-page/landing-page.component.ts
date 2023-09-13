import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  
constructor(private router: Router){}

userEmail !: string;
ngOnInit():void{

}

onContinue():void{
  this.router.navigateByUrl('facesnaps')
}

//affiche dans la console l'emeil entrer
onSubmitForm(form:NgForm):void{
  console.log(form.value)
}

}
