import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule, TooltipPosition } from "@angular/material/tooltip";
import { RouterLink } from "@angular/router";
import { DialogAddProductComponent } from "./dialog-add-product/dialog-add-product.component";
import { Product } from "../../models/product.class";
import { FirebaseService } from "../services/firebase-services/firebase.service";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { DialogEditProductComponent } from "./dialog-edit-product/dialog-edit-product.component";
import { MatSort, MatSortModule, Sort } from "@angular/material/sort";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatCardModule, MatIconModule, MatTooltipModule, MatButtonModule, CommonModule, RouterLink, MatPaginatorModule],
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements AfterViewInit {
  positionOptions: TooltipPosition[] = ["below", "above", "left", "right"];
  public product;

  displayedColumns: string[] = ["name", "price", "type", "edit", "delete"];
  dataSource = this.firebaseService.dataSourceProducts;
  clickedRows = new Set<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) {
    this.product = this.firebaseService.allProducts;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteProduct(product: Product) {
    this.firebaseService.deleteProductFromFirebase(product.id);
  }

  openAddProductDialog() {
    this.dialog.open(DialogAddProductComponent);
  }

  openEditProductDialog(product: Product) {
    const dialog = this.dialog.open(DialogEditProductComponent);
    dialog.componentInstance.product = product;
  }

  sortData(column: string) {
    const sortState: Sort = { active: column, direction: this.sort.direction === "asc" ? "desc" : "asc" };
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
