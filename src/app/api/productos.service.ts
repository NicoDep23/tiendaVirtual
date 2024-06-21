import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class ProductosService {

  urlBase = 'https://api.escuelajs.co/api/v1';

  private readonly _http = inject(HttpClient);

  getAllProductos(): Observable<any> {
    return this._http.get(this.urlBase + '/products');
  }

  getProductoById(id: number): Observable<any> {
    return this._http.get(this.urlBase +`/products/${id}`);
  }

  filterProductoByName(name: string): Observable<any> {
   
    return this._http.get(this.urlBase +`/products/?title=${name}`);
  }

}