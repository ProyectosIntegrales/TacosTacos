import { InMemoryDbService } from "angular-in-memory-web-api";
import { Taqueria } from "./classes/taqueria.class";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TaqueriasData implements InMemoryDbService {
  createDb() {
    let taquerias: Taqueria[] = [
      {
        _id: 1,
        nombre: "Tacos Juan Santa Teresita",
        estado: 14,
        ciudad: 39,
        imagen:
          "https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/16425945_752687201555841_5129289826468842149_n.png?_nc_cat=105&_nc_ohc=AFVdwyz5uIAAX9H-J5r&_nc_ht=scontent.fgdl3-1.fna&oh=267caa8cc4107014c62e3b98e260208c&oe=5ED99250",
        direccion:
          "Calle José Clemente Orozco 465, Santa Teresita, 44600 Guadalajara, Jal.",
        telefono: "33 2237 9789",
        webpage: "https://www.facebook.com/QuieroTacosJuan/",
        rating: 4.6
      }
    ];
    return { taquerias };
  }

  genId(taquerias: Taqueria[]): number {
    return taquerias.length > 0
      ? Math.max(...taquerias.map(taqueria => taqueria._id)) + 1
      : 11;
  }
}
