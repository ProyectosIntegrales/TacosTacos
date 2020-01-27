import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { SelectDropDownModule } from "ngx-select-dropdown";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { TitleComponent } from "./components/titulo/titulo.component";
import { AppComponent } from "./app.component";
import { ConsultaComponent } from "./components/consulta/consulta.component";
import { EstadosService } from "./services/estados/estados.service";
import { TaqueriasService } from "./services/taquerias/taquerias.service";
import { MunicipiosService } from "./services/municipios/municipios.service";
import { ResultadosComponent } from "./components/resultados/resultados.component";
import { AgregarComponent } from "./components/agregar/agregar.component";

import { TaqueriasData } from "./taquerias.data";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ConsultaComponent,
    ResultadosComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SelectDropDownModule,
    HttpClientInMemoryWebApiModule.forRoot(TaqueriasData, {
      dataEncapsulation: false
    })
  ],
  providers: [EstadosService, MunicipiosService, TaqueriasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
