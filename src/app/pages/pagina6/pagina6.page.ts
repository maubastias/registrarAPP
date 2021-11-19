import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
export interface Usuario {
  rut : string,
  nombre : string,
  pass : string,
  pass2 : string,
  correo : string
}; 


@Component({
  selector: 'app-pagina6',
  templateUrl: './pagina6.page.html',
  styleUrls: ['./pagina6.page.scss'],
})
export class Pagina6Page implements OnInit {

  LLAVE_USUARIOS = "lista_usuarios";

  constructor( 
    private router : Router,
    private storage : Storage) { }

  nuevoUsuario = new FormGroup({
    elRut : new FormControl(),
    elUsuario : new FormControl(),
    laPass : new FormControl(),
    laPass2 : new FormControl(),
    correo : new FormControl()
  });

  ngOnInit() {
  }


  add(){
    let u : Usuario;
    u = {
      rut : this.nuevoUsuario.controls.elRut.value,
      nombre : this.nuevoUsuario.controls.elUsuario.value,
      pass : this.nuevoUsuario.controls.laPass.value,
      pass2 : this.nuevoUsuario.controls.laPass2.value,
      correo : this.nuevoUsuario.controls.correo.value  

    };
    this.agregarUsuario(u);
    
  }

  agregarUsuario(usuario : Usuario){
    this.storage.create();
    this.storage.get(this.LLAVE_USUARIOS).then((usuarios : Usuario [])=>{
      if(!usuarios){
        this.storage.set(this.LLAVE_USUARIOS,[usuario])
        alert('Usuario registrado');
      }else{


        let existe : boolean = false;
        for(let u of usuarios){
          if(usuario.rut == u.rut){
            existe=true;
            break;
          }
        }
        
        if(existe){
          alert('El rut ya ha sido ingresado')
        }else{
          usuarios.push(usuario);
          this.storage.set(this.LLAVE_USUARIOS,usuarios);
          alert('Usuario registrado');  
        }

      }

    });
    console.log(this.storage.get(this.LLAVE_USUARIOS));
  }

}
