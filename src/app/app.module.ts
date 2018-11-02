import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SortService } from './services/sort.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ListaProdutosComponent } from './components/home/lista-produtos/lista-produtos.component';
import { FiltroComponent } from './components/home/filtro/filtro.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InfoProdutoComponent } from './components/home/info-produto/info-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaProdutosComponent,
    FiltroComponent,
    HomeComponent,
    RegistroComponent,
    InfoProdutoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
