import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {


  caracteristicas:any=[];


  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {

      this.http.get('https://rickandmortyapi.com/api/character').subscribe(respuesta =>
      {console.log(respuesta);
        this.caracteristicas=respuesta;
      }

      );
  }

}
