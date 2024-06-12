import { Component, OnInit } from "@angular/core";
import { User } from "../../../models/user.class";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { CommonModule } from "@angular/common";
import { FirebaseService } from "../../services/firebase-services/firebase.service";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-dialog-edit-user",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, FormsModule, MatProgressBarModule, MatDatepickerModule, MatSelectModule, CommonModule],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: "en-GB" }],
  templateUrl: "./dialog-edit-user.component.html",
  styleUrl: "./dialog-edit-user.component.scss"
})
export class DialogEditUserComponent implements OnInit {
  user: User = new User();
  userId!: string;
  birthDate!: Date;
  loading: boolean = false;

  constructor(private firebaseService: FirebaseService, public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

  ngOnInit(): void {
    this.birthDate = new Date(this.user.birthDate);
  }

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime(); // wandelt Datum in Timestamp um
    this.user.id = this.userId;
    await this.firebaseService.updateUserInFirebase(this.userId, this.user);
    this.loading = false;
    this.dialogRef.close();
  }
}
