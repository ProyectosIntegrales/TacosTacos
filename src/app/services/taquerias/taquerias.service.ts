import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Taqueria } from "../../classes/taqueria.class";

//import { uri } from "../../classes/uri.const";

@Injectable({ providedIn: "root" })
export class TaqueriasService {
  constructor(private http: HttpClient) {}

  apiUrl = "api/taquerias";
  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers
  };

  readAll(): Observable<Taqueria[]> {
    var result = this.http.get<Taqueria[]>(this.apiUrl).pipe(
      tap(_ => console.log(this.http)),
      catchError(this.handleError)
    );
    return result;
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
