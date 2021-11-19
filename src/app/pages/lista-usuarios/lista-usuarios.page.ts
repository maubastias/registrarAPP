import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


export interface Usuario {
  rut : string,
  nombre : string,
  pass : string,
  pass2 : string,
  correo : string
}; 

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {

  lista: Usuario[] = [];

  constructor(private storage : Storage) { }

  ngOnInit() {
    this.storage.create();
    this.storage.get('lista_usuarios').then((usuarios : Usuario[])=>{
      for(let usu of usuarios){
        this.lista.push(usu);

      }
      
    });
  }

}
