import { Component, EventEmitter, Output } from "@angular/core";
import { Estado } from "../../classes/estado.class";
import { Municipio } from "../../classes/municipio.class";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.component.html",
  styleUrls: ["./agregar.component.css"]
})
export class AgregarComponent {
  public estados: Estado[];
  public selectedEstado: Estado;

  public ciudades: Municipio[];
  public selectedCiudad: Municipio;

  nombre: string;

  agregarVisible: boolean = false;
  constructor() {}

  ngOnInit() {}

  selectCiudad(input: any) {
    var datos = input.split(",");
    if (parseInt(datos[0]) > 0 && parseInt(datos[1]) > 0) {
      this.agregarVisible = true;
    } else {
      this.agregarVisible = false;
    }
    console.log(datos);
  }

  public selectEstado() {}
}
