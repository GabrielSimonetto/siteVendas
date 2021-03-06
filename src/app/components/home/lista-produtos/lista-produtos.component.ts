import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  lista = [
    {id: 0, nome: "Pneu", preco: "R$: 378,00", img: "https://assets.xtechcommerce.com/uploads/images/medium/67ea6375a28da83574674b2146921148.png" },
    {id: 1,  nome: "Mouse", preco:"R$: 59.99", img: "https://www.freepngimg.com/thumb/computer%20mouse/4-pc-mouse-png-image-thumb.png" },
    {id: 2,  nome: "Cadeira", preco: "R$:124.49", img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Cadeira-madeira.png" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
