import { Component, EventEmitter, Output } from "@angular/core";
import { Estado } from "../../classes/estado.class";
import { EstadosService } from "../../services/estados/estados.service";
import { Municipio } from "../../classes/municipio.class";
import { MunicipiosService } from "../../services/municipios/municipios.service";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.css"]
})
export class ConsultaComponent {
  public estados: Estado[];
  public selectedEstado: Estado;

  public ciudades: Municipio[];
  public selectedCiudad: Municipio;

  public estadosConf = {
    displayKey: "name",
    search: true,
    height: "auto",
    placeholder: "Selecciona Estado",
    limitTo: 10,
    moreText: "ver más",
    searchPlaceholder: "Buscar",
    customComparator: () => {}
  };

  public ciudadesConf = {
    displayKey: "name",
    search: true,
    height: "auto",
    placeholder: "Selecciona Ciudad",
    moreText: "ver más",
    searchPlaceholder: "Buscar",
    customComparator: () => {},
    limitto: 10,
    noResultsFound: "Selecciona un Estado!"
  };

  @Output() ciudadSelected = new EventEmitter<any>();

  constructor(
    private estadosServ: EstadosService,
    private municipiosServ: MunicipiosService
  ) {}

  ngOnInit() {
    this.loadEstados();
  }

  private loadEstados() {
    this.estados = this.estadosServ.readAll();
  }

  public selectEstado() {
    this.ciudades = [];
    this.selectCiudad = null;
    this.ciudades = this.municipiosServ.readAll(this.selectedEstado);
  }
  j;
  public selectCiudad() {
    this.ciudadSelected.emit(
      this.selectedCiudad.id + "," + this.selectedEstado.id
    );
  }
}
