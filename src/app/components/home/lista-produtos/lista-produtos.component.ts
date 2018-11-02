import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  lista = [
    { id: 0, nome: "Pneu", preco: "R$: 378,00", img: "https://assets.xtechcommerce.com/uploads/images/medium/67ea6375a28da83574674b2146921148.png", categoria: 1 },
    { id: 1, nome: "Mouse", preco: "R$: 59.99", img: "https://www.terabyteshop.com.br/img/produtos/g/mouse-corsair-gamer-vengeance-m65-pro-rgb-ch-9300011-na-8-botoes-12000-dpi-preto_33446.png", categoria: 2 },
    { id: 2, nome: "Cadeira", preco: "R$:124.49", img: "http://lzcorporativo.com.br/img/produto/2fb1cd7545a72ac151099f929f23882d_cadeira%20urca.png", categoria: 3 }
  ]
  constructor(private sortService: SortService) { }

  ngOnInit() {
  }
  listaFiltrada() {
    let lista1 = [];
    
      for (let objeto of this.lista) {
        if (this.sortService.getSearch() == "") {
        if (objeto.categoria == this.sortService.categoria() || this.sortService.categoria() == 0) {
          lista1.push(objeto);
        }
      } else {
        if (objeto.nome.includes(this.sortService.getSearch())) {
          lista1.push(objeto);
        }
      }
    }
    return lista1;
  }
  

}
