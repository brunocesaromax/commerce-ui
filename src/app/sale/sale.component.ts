import { ProductService } from './../service/product.service';
import { SaleService } from './../service/sale.service';
import { ClientsService } from './../service/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sales: Array<any>;
  sale = {};
  clients: Array<any>;
  products: Array<any>;

  constructor(private clientService: ClientsService, private productService: ProductService, private saleService: SaleService) { }

  ngOnInit() {
    this.list();
    this.clientService.list().subscribe(dados => this.clients = dados);
    this.productService.list().subscribe(dados => this.products = dados);
  }

  list() {
    this.saleService.list().subscribe(dados => this.sales = dados);
  }

  save() {
    this.saleService.save(this.sale)
      .subscribe(() => {
        this.sale = {};
        this.list();
      });
  }

  delete(sale: any) {
    this.saleService.delete(sale)
      .subscribe(() => {
        this.list();
        alert("Sale deleted successfully.")
      });
  }

  update(sale: any) {
    this.sale = sale;
  }

}
