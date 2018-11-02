import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private botao = 0;
  private search = "";
  setButton(n) {
    this.botao = n;
  }
  setSearch(n) {
    this.search = n;
  }
  getSearch() {
    return this.search;
  }
  categoria() {
    return this.botao;
  }
  constructor() { }
}
