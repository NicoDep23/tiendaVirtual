import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import DetalleComponent from './detalle/detalle.component';

export const routes: Routes = [
    
    {
        path:'home', component: HomeComponent
    },
    {
        path:'productos', component: ProductosComponent
    },
    { 
        path: 'productos/:id', component: DetalleComponent 
    },
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: '**', redirectTo:'home', pathMatch:'full'}

];
