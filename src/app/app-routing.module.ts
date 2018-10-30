import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InfoProdutoComponent } from './components/home/info-produto/info-produto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: RegistroComponent },
  { path: 'info/:id', component: InfoProdutoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
