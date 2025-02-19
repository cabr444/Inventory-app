import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ProductService } from './../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true,  // 🚀 Necesario en Angular 17+
  imports: [CommonModule], // 👈 Agregar esto para usar *ngFor
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getListOfProducts().subscribe(
      (data) => {
        this.products = data;
      }
    );
  }
}
