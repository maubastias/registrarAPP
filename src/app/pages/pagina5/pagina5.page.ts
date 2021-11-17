import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.page.html',
  styleUrls: ['./pagina5.page.scss'],
})
export class Pagina5Page implements OnInit {

  qrData = "https://www.horaoficial.cl/";
  elementType : 'url' | 'img' | 'canvas' = 'canvas';

  constructor( private barcodescanner:BarcodeScanner, private base64togallery:Base64ToGallery,
                private router:Router) { }

  ngOnInit() {
  }


}
