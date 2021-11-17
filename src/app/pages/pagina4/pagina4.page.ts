import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {

  constructor( private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    var nombre = this.activatedroute.snapshot.paramMap.get('valor');
  }

  nom_usu = this.activatedroute.snapshot.paramMap.get('valor');

  Usuario = new FormGroup({
    elUsuario : new FormControl(''),
    laPass : new FormControl('')
  })

}
