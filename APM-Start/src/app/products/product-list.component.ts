import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { productService } from "./product.service";
import { Subscription } from "rxjs";

@Component({
    // selector:'pm-products',  so we can use it as a directive in any other component
    
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
 
export class ProductListComponent implements OnInit, OnDestroy {
  
pageTitle: string = 'Product List';
imageWidth: number = 60;
imageMargin: number = 40;
showImage: boolean = false;
errorMessage: string = '';
filteredProducts: IProduct[] = [];
products: IProduct[] = [];
sub!: Subscription;
  constructor(private productService: productService) {

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  toggleImage(): void
  {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => 
      {
        this.products = products;
        this.filteredProducts = this.products;;
      },
      error: err => this.errorMessage = err
    });
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


