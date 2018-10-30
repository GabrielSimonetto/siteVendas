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
    {id: 0, nome: "Pneu", preco: "R$: 378,00", img: "https://assets.xtechcommerce.com/uploads/images/medium/67ea6375a28da83574674b2146921148.png" },
    {id: 1,  nome: "Mouse", preco:"R$: 59.99", img: "https://www.freepngimg.com/thumb/computer%20mouse/4-pc-mouse-png-image-thumb.png" },
    {id: 2,  nome: "Cadeira", preco: "R$:124.49", img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Cadeira-madeira.png" }
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
