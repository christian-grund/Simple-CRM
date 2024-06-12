import { Component } from "@angular/core";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { provideNativeDateAdapter } from "@angular/material/core";
import { Product } from "../../../models/product.class";
import { FormsModule } from "@angular/forms";
import { FirebaseService } from "../../services/firebase-services/firebase.service";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-dialog-add-product",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDatepickerModule, FormsModule, MatProgressBarModule, MatSelectModule, CommonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: "./dialog-add-product.component.html",
  styleUrl: "./dialog-add-product.component.scss"
})
export class DialogAddProductComponent {
  product = new Product();
  loading: boolean = false;
  selected = "Product";

  constructor(private firebase: FirebaseService, public dialogRef: MatDialogRef<DialogAddProductComponent>) {}

  async saveProduct() {
    this.loading = true;
    await this.firebase.addProductToFirebase(this.product);
    console.log("savedProduct:", this.product);
    this.loading = false;
    this.dialogRef.close();
  }
}
