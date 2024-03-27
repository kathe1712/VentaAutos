import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  baseUrl = "https://epico.gob.ec/vehiculo/public/api/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Respuesta>(this.baseUrl + "vehiculos/").pipe(
      map(respuesta => respuesta.data)
    );
  }
  insertVehiculo(vehiculo: Vehiculo) {
    return this.http.post<Respuesta>(this.baseUrl + "vehiculo/", vehiculo, this.httpOptions);
  }

  getVehiculo(codigo: string) {
    return this.http.get<Respuesta>(this.baseUrl + "vehiculo/" + codigo);
  }

  actualizarVehiculo(vehiculo: Vehiculo, codigo: string) {
    return this.http.put<Respuesta>(this.baseUrl + "vehiculo/" + codigo, vehiculo, this.httpOptions);
  }

  eliminarVehiculo(codigo: string) {
    return this.http.delete<Respuesta>(this.baseUrl + "vehiculo/" + codigo);
  }



  // getVehiculosBusqueda(filtro:any):Observable<Array<Vehiculo>>{
  //   const escucha: Observable<Array<Vehiculo>> = new Observable(escuchando => {
  //     let lista = this.listaVehiculos.filter(elem => elem.marca.toLowerCase().includes(filtro.toLowerCase()));
  //     escuchando.next(lista);
  //   });
  //   return escucha;
  // }
  // getVehiculo(codigo:string):Observable<Vehiculo| undefined>{
  //   const escucha: Observable<Vehiculo| undefined> = new Observable(escuchando => {
  //     //setTimeout(()=>{
  //       let vehiculo = this.listaVehiculos.find(ele => ele.codigo === codigo );
  //       escuchando.next(vehiculo); //next, error, complete
  //     //},1000)
  //   });
  //   return escucha;
  // }
  addVehiculo(vehiculo: Vehiculo) {
    this.listaVehiculos.push(vehiculo);
  }
  //DECLARO ARREGLOS
  private listaVehiculos: Array<Vehiculo> = [
    { "codigo": "A001", "marca": "CHEVROLET", "modelo": "ONIX-6", "color": "AZUL", "kilometraje": "50000", "precio": 17000, "foto": "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cars-subcontent/04-images/chevrolet-autos-nuevo-onix-v1.png?imwidth=960", "anio": 2024, "calificacion": 3 },
    { "codigo": "A002", "marca": "KIA", "modelo": "RIO-2", "color": "AZUL", "kilometraje": "50000", "precio": 17000, "foto": "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cars-subcontent/04-images/chevrolet-autos-nuevo-onix-v1.png?imwidth=960", "anio": 2024, "calificacion": 4 },
    { "codigo": "A003", "marca": "CHERY", "modelo": "ARRIZO", "color": "AZUL", "kilometraje": "50000", "precio": 17000, "foto": "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cars-subcontent/04-images/chevrolet-autos-nuevo-onix-v1.png?imwidth=960", "anio": 2024, "calificacion": 5 },
    { "codigo": "A004", "marca": "TOYOTA", "modelo": "AGYA", "color": "AZUL", "kilometraje": "50000", "precio": 17000, "foto": "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cars-subcontent/04-images/chevrolet-autos-nuevo-onix-v1.png?imwidth=960", "anio": 2024, "calificacion": 6 },
    { "codigo": "A005", "marca": "HYUNDAI", "modelo": "ACCENT", "color": "AZUL", "kilometraje": "50000", "precio": 17000, "foto": "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cars-subcontent/04-images/chevrolet-autos-nuevo-onix-v1.png?imwidth=960", "anio": 2024, "calificacion": 7 },
  ];



}
export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo> | Vehiculo | any;
}
