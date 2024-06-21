import { Component, inject } from '@angular/core';
import { ProductosService } from '../api/productos.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
  imports: [CommonModule, CardComponent, RouterLink, FormsModule]
})
export class ProductosComponent {

  private readonly productosSvc = inject(ProductosService);

  productos$ = this.productosSvc.getAllProductos();

  titulo: string = '';
  
  buscarProducto(): void {
    if (this.titulo.trim() != '') {
      this.productos$ = this.productosSvc.filterProductoByName(this.titulo);
    } else {
      this.productos$ = this.productosSvc.getAllProductos();
    }
  }


  recortarTitulo(titulo: string, maxLength: number): string {
    return titulo.length > maxLength ? titulo.substring(0, maxLength) + '...' : titulo;
  }
  
}
