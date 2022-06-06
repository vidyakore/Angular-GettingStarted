import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { productService } from "./product.service";

@Component({
    selector:'pm-products',  //so we can use it as a directive in any other component
    templateUrl: './product-list.component.html',
    styleUrls: ['./products-list.component.css']
})
 
export class ProductListComponent implements OnInit {
  
pageTitle: string = 'Product List';
imageWidth: number = 60;
imageMargin: number = 40;
showImage: boolean = false;

filteredProducts: IProduct[] = [];
products: IProduct[] = [];

  constructor(private productService: productService) {

  }
  toggleImage(): void
  {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    
  }

  private _listFilter: string = 'cart';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string)
  {
    this._listFilter = value;
    console.log('In setter ',value);
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void
  {
    this.pageTitle = 'Product List: '+ message;
  }
 
}


