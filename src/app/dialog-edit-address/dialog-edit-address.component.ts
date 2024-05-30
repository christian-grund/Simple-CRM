import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { User } from "../../models/user.class";
import { FirebaseService } from "../firebase-services/firebase.service";

@Component({
  selector: "app-dialog-edit-address",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, FormsModule, MatProgressBarModule, CommonModule],
  templateUrl: "./dialog-edit-address.component.html",
  styleUrl: "./dialog-edit-address.component.scss"
})
export class DialogEditAddressComponent {
  user!: User;
  loading: boolean = false;

  constructor(private firebase: FirebaseService, public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  async saveUser() {
    console.log("saveUser() edit-address");
  }
}
