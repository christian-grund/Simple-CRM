import { Component } from "@angular/core";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from "@angular/material/core";
import { User } from "../../../models/user.class";
import { FormsModule } from "@angular/forms";
import { FirebaseService } from "../../services/firebase-services/firebase.service";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { CommonModule } from "@angular/common";
import { Firestore } from "@angular/fire/firestore";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-dialog-add-user",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDatepickerModule, FormsModule, MatProgressBarModule, MatSelectModule, CommonModule],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: "en-GB" }],
  templateUrl: "./dialog-add-user.component.html",
  styleUrl: "./dialog-add-user.component.scss"
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  loading: boolean = false;
  selected = "Product";

  constructor(private firebase: FirebaseService, public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime(); // wandelt Datum in Timestamp um
    this.loading = true;
    await this.firebase.addUserToFirebase(this.user);
    this.loading = false;
    this.dialogRef.close();
  }

  // convertBirthdate() {
  //   const date = new Date(this.user.birthDate);
  //   this.birthDate = date.toLocaleDateString();
  // }
}
