import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';


const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'contacto/:id', component:ContactoComponent},
    {path:'empleado', component:EmpleadoComponent},
    {path:'fruta', component:FrutaComponent},
    {path:'coches', component:CochesComponent},
    {path:'plantillas', component:PlantillasComponent},
    {path:'**', component:HomeComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
