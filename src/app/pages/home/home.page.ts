import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private navController:NavController,
               private router: Router,
               private auth : AuthenticationService ) {}

  Usuario = new FormGroup({
    elUsuario : new FormControl(''),
    laPass : new FormControl('')
  })

  irPagina4(){
    this.navController.navigateForward(['/pagina4'])
  }

  irPagina1(){
    this.navController.navigateForward(['/pagina1'])
  }

  usu:any;

  /*IngresarAlumno(){
    this.usu={
      nom: this.Usuario.controls.elUsuario.value,
      pass: this.Usuario.controls.laPass.value
    };

    if(this.usu.nom == 'alumno' && this.usu.pass == 'alumno'){
      this.router.navigate(['/pagina4',this.usu.nom])
    }
    else{
      alert('El usuario o contraseña es incorrecto')
    }

    this.Usuario.controls.nom.setValue('');
    this.Usuario.controls.pass.setValue('');

  }*/

  ingresarAlumno(){
    this.usu ={
      nom : this.Usuario.controls.elUsuario.value,
      pass : this.Usuario.controls.laPass.value
    }
    this.auth.login(this.usu.nom,this.usu.pass);
  }
}
