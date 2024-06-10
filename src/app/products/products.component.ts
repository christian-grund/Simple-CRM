import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule, TooltipPosition } from "@angular/material/tooltip";
import { RouterLink } from "@angular/router";
import { DialogAddProductComponent } from "../dialog-add-product/dialog-add-product.component";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatIconModule, MatTooltipModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss"
})
export class ProductsComponent {
  positionOptions: TooltipPosition[] = ["below", "above", "left", "right"];

  constructor(public dialog: MatDialog) {}

  openAddProductDialog() {
    this.dialog.open(DialogAddProductComponent);
  }
}
