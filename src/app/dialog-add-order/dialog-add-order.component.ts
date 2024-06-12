import { Component } from "@angular/core";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { provideNativeDateAdapter } from "@angular/material/core";
import { Product } from "../../models/product.class";
import { FormsModule } from "@angular/forms";
import { FirebaseService } from "../services/firebase-services/firebase.service";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";
import { Order } from "../../models/order.class";

@Component({
  selector: "app-dialog-add-product",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDatepickerModule, FormsModule, MatProgressBarModule, MatSelectModule, CommonModule],
  providers: [],
  templateUrl: "./dialog-add-order.component.html",
  styleUrl: "./dialog-add-order.component.scss"
})
export class DialogAddOrderComponent {
  order = new Order();
  loading: boolean = false;
  // selected = "Product";

  constructor(private firebase: FirebaseService, public dialogRef: MatDialogRef<DialogAddOrderComponent>) {}

  saveOrder() {
    console.log("Order:");
  }
}
