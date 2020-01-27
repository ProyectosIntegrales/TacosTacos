import { Component, EventEmitter, Input } from "@angular/core";
import { Estado } from "../../classes/estado.class";
import { Municipio } from "../../classes/municipio.class";
import { Taqueria } from "../../classes/taqueria.class";
import { TaqueriasService } from "../../services/taquerias/taquerias.service";

@Component({
  selector: "app-resultados",
  templateUrl: "./resultados.component.html",
  styleUrls: ["./resultados.component.css"]
})
export class ResultadosComponent {
  public selectedEstado: Estado;
  public selectedCiudad: Municipio;

  public taquerias: Taqueria[];
  private allTaquerias: Taqueria[];

  constructor(private taqueriasServ: TaqueriasService) {}

  ngOnInit() {
    this.taqueriasServ.readAll().subscribe(data => {
      this.allTaquerias = data;
    });
  }

  selectCiudad(input: any) {
    var datos = input.split(",");
    console.log(datos);
    console.log(this.allTaquerias);

    this.taquerias = [];

    this.allTaquerias
      .filter(
        t => t.estado === parseInt(datos[1]) && t.ciudad === parseInt(datos[0])
      )
      .forEach(tt => {
        console.log(tt);

        this.taquerias.push(tt);
      });

    console.log(this.taquerias);
  }
}
