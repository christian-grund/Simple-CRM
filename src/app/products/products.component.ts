import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule, TooltipPosition } from "@angular/material/tooltip";
import { RouterLink } from "@angular/router";
import { DialogAddProductComponent } from "../dialog-add-product/dialog-add-product.component";
import { Product } from "../../models/product.class";
import { FirebaseService } from "../firebase-services/firebase.service";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatIconModule, MatTooltipModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss"
})
export class ProductsComponent {
  positionOptions: TooltipPosition[] = ["below", "above", "left", "right"];
  public product;

  dataSourceProducts = this.firebaseService.dataSourceProducts;

  displayedColumns: string[] = ["Product Name", "Price per Unit", "Type", "Edit", "Delete"];
  clickedRows = new Set<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) {
    this.product = this.firebaseService.allProducts;
    console.log("product:", this.product);
  }

  deleteProduct(product: Product) {
    // console.log("deleteProduct:", product);
    this.firebaseService.deleteProductFromFirebase(product.id);
  }

  openAddProductDialog() {
    this.dialog.open(DialogAddProductComponent);
  }

  openEditProductDialog() {
    // this.dialog.open(DialogAddProductComponent);
  }
}
