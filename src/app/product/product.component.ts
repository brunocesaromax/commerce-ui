import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<any>;
  product = {};

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.productService.list().subscribe(dados => this.products = dados);
  }

  save() {
    this.productService.save(this.product)
      .subscribe(() => {
        this.product = {};
        this.list();
        alert("Product created successfully.")
      });
  }

  delete(product: any) {
    this.productService.delete(product)
      .subscribe(() => {
        this.list();
        alert("Product deleted successfully.")
      });
  }

  update(product: any) {
    this.product = product;
  }

}
