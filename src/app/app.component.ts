import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventory-app';
}
