import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { Product } from "../../../models/product.class";
import { FirebaseService } from "../../services/firebase-services/firebase.service";

@Component({
  selector: "app-dialog-edit-product",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDatepickerModule, FormsModule, MatProgressBarModule, MatSelectModule, CommonModule],
  templateUrl: "./dialog-edit-product.component.html",
  styleUrl: "./dialog-edit-product.component.scss"
})
export class DialogEditProductComponent {
  product: Product = new Product();
  loading: boolean = false;

  constructor(private firebaseService: FirebaseService, public dialogRef: MatDialogRef<DialogEditProductComponent>) {}

  async saveEditedProduct() {
    this.loading = true;
    await this.firebaseService.updateProductInFirebase(this.product.id, this.product);
    this.loading = false;
    this.dialogRef.close();
  }
}
