import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);


  constructor(
      private router : Router,
      private platform : Platform,
      private storage : Storage
  ) { }

    login(nombre_usuario,password){
      if(nombre_usuario=="alumno" && password=="alumno"){
        this.authState.next(true);
        this.router.navigate(['/pagina4',nombre_usuario])
      }else{
        alert('Usuario o contraseña incorrectos!');
      }
    }

    logout(){

    }

    isAuthenticated():boolean{
      return this.authState.value;
    }

  

}
