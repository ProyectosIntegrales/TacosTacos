import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Municipio } from "../../classes/municipio.class";
import { municipios } from "../../classes/municipios.const";

@Injectable()
export class MunicipiosService {
  constructor(private http: HttpClient) {}

  readAll(estado: Estado): Municipio[] {
    var result = municipios.filter(m => m.state_id === estado.id);
    return result;
  }
}
