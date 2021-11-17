import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor( private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    var nombre = this.activatedroute.snapshot.paramMap.get('datos');
  }

  nom_usu = this.activatedroute.snapshot.paramMap.get('datos');

  Usuario = new FormGroup({
    elUsuario : new FormControl(''),
    laPass : new FormControl('')
  })

}
