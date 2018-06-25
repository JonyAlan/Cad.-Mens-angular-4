/**
 * Home component
 * 
 */
import { Component, OnInit } from '@angular/core';
import {Avulso} from "../avulso"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  title:string = "Controle de Veiculos";
  subtitle:string = "Estacionamento";
  

  placas =[];
  
  placa:Avulso ={
    placa: "", 
    marca: "",
    hora: new Date

  };


  add(){
    let placa = Object.assign({},this.placa);
    this.placas.push(placa);
  
  }

  
  

}
