import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class ProductosService {

  urlBase = 'https://fakestoreapi.com';

  private readonly _http = inject(HttpClient);

  getAllProductos(): Observable<any> {
    return this._http.get(this.urlBase + '/products');
  }

  getProductoById(id: number): Observable<any> {
    return this._http.get(`https://fakestoreapi.com/products/${id}`);
  }

/*   getPrductsByName(name: string){
    return this._http.get(`${this.urlBase}/productos?linkTo=producto&like=${name}`)
 } */
}