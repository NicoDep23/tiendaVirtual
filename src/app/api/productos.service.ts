import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs"; 

@Injectable({providedIn: 'root'})

export class ProductosService{
    private readonly _http = inject(HttpClient);
    getAllProductos():Observable<any>{
        return this._http.get('https://fakestoreapi.com/products');
    }

}