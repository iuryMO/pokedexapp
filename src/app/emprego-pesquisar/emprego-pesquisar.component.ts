import { Component, OnInit } from '@angular/core';
import { EmpregoService } from "../../services/emprego.service";
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-emprego-pesquisar',
  templateUrl: './emprego-pesquisar.component.html',
  styleUrls: ['./estilos.css']
})

@Injectable()
export class EmpregoPesquisarComponent implements OnInit {

  munici: string;

  sines: string[];

  errorMessage: string;

  constructor(public emprego: EmpregoService) { }

  ngOnInit() { }

  pesquisarSines() {
    this.emprego.buscarSines(this.munici)
      .subscribe(
      sines => this.sines = sines,
      error => this.errorMessage = <any>error);
  }

  /*initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }*/

}