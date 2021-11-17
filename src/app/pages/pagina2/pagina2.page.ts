import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})

export class Pagina2Page implements OnInit {

  constructor( private navController:NavController,
    private router: Router ) {}

Usuario = new FormGroup({
elUsuario : new FormControl(''),
laPass : new FormControl('')
})

ngOnInit() {
}

irPagina4(){
this.navController.navigateForward(['/pagina4'])
}

irPagina1(){
this.navController.navigateForward(['/pagina1'])
}

usu:any;

IngresarDocente(){
this.usu={
nom: this.Usuario.controls.elUsuario.value,
pass: this.Usuario.controls.laPass.value
};

if(this.usu.nom == 'docente' && this.usu.pass == 'docente'){
this.router.navigate(['/pagina3',this.usu.nom])
}
else{
alert('El usuario o contraseña es incorrecto')
}

this.Usuario.controls.nom.setValue('');
this.Usuario.controls.pass.setValue('');

}
}

  


