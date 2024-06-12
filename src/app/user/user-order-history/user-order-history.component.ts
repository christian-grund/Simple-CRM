import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule, TooltipPosition } from "@angular/material/tooltip";
import { FirebaseService } from "../../services/firebase-services/firebase.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogAddOrderComponent } from "../../dialog-add-order/dialog-add-order.component";

@Component({
  selector: "app-user-order-history",
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, CommonModule],
  providers: [],
  templateUrl: "./user-order-history.component.html",
  styleUrl: "./user-order-history.component.scss"
})
export class UserOrderHistoryComponent {
  positionOptions: TooltipPosition[] = ["below", "above", "left", "right"];

  constructor(private firebaseService: FirebaseService, public dialog: MatDialog) {}

  openOrderDialog() {
    this.dialog.open(DialogAddOrderComponent);
  }
}
