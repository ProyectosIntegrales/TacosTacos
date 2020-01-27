import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Estado } from "../../classes/estado.class";
import { uri } from "../../classes/uri.const";
import { estados } from "../../classes/estados.const";

@Injectable()
export class EstadosService {
  constructor(private http: HttpClient) {}

  readAll(): Estado[] {
    var result = estados;
    return result;
  }
}
