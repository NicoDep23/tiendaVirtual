import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../api/productos.service';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CardComponent, CommonModule,RouterLink],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})

export default class DetalleComponent implements OnInit {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productosService.getProductoById(Number(id)).subscribe(producto => {
      this.producto = producto;
    });
  }
}
