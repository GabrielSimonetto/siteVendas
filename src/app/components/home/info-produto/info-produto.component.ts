import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-info-produto',
  templateUrl: './info-produto.component.html',
  styleUrls: ['./info-produto.component.css']
})
export class InfoProdutoComponent implements OnInit {
  id: number;
  private sub: any;
  
  lista = [
    {id: 0, nome: "Pneu", preco: "R$: 378,00", img: "https://assets.xtechcommerce.com/uploads/images/medium/67ea6375a28da83574674b2146921148.png", descricao: "Um pneu de altíssima qualidade. A calota de aço inox mantém o visual moderno do carro" },
    {id: 1,  nome: "Mouse", preco:"R$: 59.99", img: "https://www.terabyteshop.com.br/img/produtos/g/mouse-corsair-gamer-vengeance-m65-pro-rgb-ch-9300011-na-8-botoes-12000-dpi-preto_33446.png" },
    {id: 2,  nome: "Cadeira", preco: "R$:124.49", img: "http://lzcorporativo.com.br/img/produto/2fb1cd7545a72ac151099f929f23882d_cadeira%20urca.png" }
  ]
  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
}
  ngOnInit() {
  }

}
