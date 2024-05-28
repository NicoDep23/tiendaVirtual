import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProductosService } from '../api/productos.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

  private readonly productosSvc = inject(ProductosService);
  productos$ = this.productosSvc.getAllProductos().pipe(
    map((productos: any[]) => productos.filter(producto => producto.category === 'electronics'))
  );

  
  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  
}
