import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor(private sortService: SortService) { }
  name = "";
  ngOnInit() {
    
  }
  settar() {
    this.sortService.setSearch(this.name);
  }
  limpar() {
    this.sortService.setButton(0);
    this.name = "";
    this.settar();
  }
  
  

}
