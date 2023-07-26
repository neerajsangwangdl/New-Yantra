import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/shared/data.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/shared/productservice.service';
//import { CategoryService } from 'src/app/services/Category/category.service';
import { CategoryService } from 'src/app/services/shared/category.service';
import { ProductSubCategory } from 'src/app/models/ProductSubCategory';
//import { CheckoutService } from 'src/app/services/Checkout/checkout.service';
import { Product } from 'src/app/models/product';
import { Paging } from 'src/app/models/paging';
//import { ProductPaginData } from 'src/app/models/product-pagin-data';
import { ProductPaging } from 'src/app/models/product-pagin-data';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/shared/global.service';
//import { GlobalService } from 'src/app/services/Shared/global.service';
//import { GlobalService } from 'src/app/services/Shared/global.service';
//import { GlobalHttpService } from 'src/app/services/Shared/global-http.service';
import { GlobalHttpService } from 'src/app/services/shared/global-http.service';

import { environment } from 'src/environments/environment';
import imageCompression from 'browser-image-compression';
import { Options } from 'html2canvas';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.scss']
})
export class ProductInsertComponent implements OnInit, OnDestroy {
onProductSelect($event) {
throw new Error('Method not implemented.');
}
  productListDropdownSettings = {
    singleSelection: false,
    idField: 'ProductId',
    textField: 'Name',
    limitSelection: 1,
    closeDropDownOnSelection: true,
    allowSearchFilter: true,
    noDataAvailablePlaceholderText: 'No Data Available'
  };
  SelectedProduct: any;
  customer: Customer = new Customer();
  public ProductInsertForm: FormGroup;
  loading = false;
  submitted = false;
  refId: any;
  totalNewAmount: any;
  user: any;
  categoryList: any;
  filteredCategoryList: any;
  filteredSubCategoryList: any[];
  customerList: any[];
  productId: any;
  product: any;
  searchString: any = '';
  productList: any;
  PRODUCT_COUNT: any;
  public searchText: string;
  public searchModelChanged: Subject<any> = new Subject<any>();
  public searchModelChangeSubscription: Subscription
  newstockProducts: any;
  totalNewStock: any;
  addNew: number;
  productIds: any = [];
  currentUserId: any = 0;
  options: {
    maxSizeMB: number,
    onProgress: Function,
    useWebWorker: boolean,
    signal: AbortSignal,
  }

  constructor(
    private formBuilder: FormBuilder,
    private ProductService: ProductService,
   // private checkoutService: CheckoutService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private dataService: DataService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private router: Router,
    public GlobalHttpService: GlobalHttpService,
    public globalService: GlobalService) {
    // imageCompression(file: File, options: Options): Promise<File>
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }
  buildForm() {
    this.ProductInsertForm = this.formBuilder.group({
      name: ['', Validators.required],
      // alternate_name: ['', Validators.required],
      videolink: [''],
      CanSeeRole: ['10', [Validators.required, Validators.min(1), Validators.max(10)]],
      CategoryId: ['1', Validators.required],
      DepartmentId: ['1', Validators.required],
      description: ['', Validators.required],
      DiscountPercentage: ['0', [Validators.min(0), Validators.max(10)]],
      DisplayPriority: ['20', [Validators.required, Validators.min(1)]],
      stock: ['', !this.addNew ? [Validators.required, Validators.min(0)] : Validators.min(1)],
      newstock: ['', this.addNew ? [Validators.required, Validators.min(1)] : Validators.min(1)],
      IsActive: ['1', Validators.required],
      dhc_category: ['0', Validators.required],
      max_quantity: ['100', [Validators.required, Validators.min(1), Validators.max(1000)]],
      min_quantity: ['1', [Validators.required, Validators.min(1), Validators.max(1000)]],
      // ModelName: ['', Validators.required],
      price: ['1', !this.addNew ? [Validators.required, Validators.min(1)] : Validators.min(1)],
      landing_rate: ['', [Validators.min(1)]],
      newprice: ['', this.addNew ? [Validators.required, Validators.min(1)] : Validators.min(1)],
      // product_code: ['', Validators.required],
      // SellerDetail: [15, Validators.required],
      SubCategoryId: ['', Validators.required],
      Tags: [''],
      WarrantyInDays: ['90', [Validators.required, Validators.min(0)]],
      ImageWidth: ['600', !this.productId ? Validators.required : null],
      ImageHeight: ['auto', !this.productId ? Validators.required : null],
      image: [null, !this.productId ? Validators.required : null],
    });
    if (this.addNew) {
      this.ProductInsertForm.controls['price'].disable()
      this.ProductInsertForm.controls['stock'].disable()
    } else {
      this.ProductInsertForm.controls['newprice'].disable()
      this.ProductInsertForm.controls['newstock'].disable()
    }
  }
  

  get f() { return this.ProductInsertForm.controls; }

  onSubmit() {
    

    }

}
