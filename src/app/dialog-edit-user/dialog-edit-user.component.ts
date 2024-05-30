import { Component } from "@angular/core";
import { User } from "../../models/user.class";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { CommonModule } from "@angular/common";
import { FirebaseService } from "../firebase-services/firebase.service";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { provideNativeDateAdapter } from "@angular/material/core";

@Component({
  selector: "app-dialog-edit-user",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, FormsModule, MatProgressBarModule, MatDatepickerModule, CommonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: "./dialog-edit-user.component.html",
  styleUrl: "./dialog-edit-user.component.scss"
})
export class DialogEditUserComponent {
  user!: User;
  birthDate!: Date;
  loading: boolean = false;

  constructor(private firebase: FirebaseService, public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

  saveUser() {
    console.log("saveUser() edit-user");
  }
}
