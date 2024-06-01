import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { User } from "../../models/user.class";
import { FirebaseService } from "../firebase-services/firebase.service";
import { collection, doc, updateDoc } from "@angular/fire/firestore";

@Component({
  selector: "app-dialog-edit-address",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, FormsModule, MatProgressBarModule, CommonModule],
  templateUrl: "./dialog-edit-address.component.html",
  styleUrl: "./dialog-edit-address.component.scss"
})
export class DialogEditAddressComponent {
  user!: User;
  userId!: string;
  loading: boolean = false;

  constructor(private firebaseService: FirebaseService, public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  async saveUser() {
    this.loading = true;
    this.user.id = this.userId;
    const userDocRef = doc(collection(this.firebaseService.firestore, "users"), this.userId);
    const userData = this.user.toJSON();
    await this.firebaseService.updateUserInFirebase(this.userId, this.user);
    this.loading = false;
    this.dialogRef.close();
  }
}
