import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { FirebaseService } from "../firebase-services/firebase.service";
import { deleteDoc, doc, onSnapshot } from "@angular/fire/firestore";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { User } from "../../models/user.class";
import { MatDialog } from "@angular/material/dialog";
import { DialogEditAddressComponent } from "../dialog-edit-address/dialog-edit-address.component";
import { DialogEditUserComponent } from "../dialog-edit-user/dialog-edit-user.component";
import { MatTooltipModule, TooltipPosition } from "@angular/material/tooltip";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-user-detail",
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, RouterModule],
  templateUrl: "./user-detail.component.html",
  styleUrl: "./user-detail.component.scss"
})
export class UserDetailComponent implements OnInit, OnDestroy {
  userId!: string;
  user: User = new User();
  birthDate!: string;
  unsubUser!: () => void;
  positionOptions: TooltipPosition[] = ["below", "above", "left", "right"];
  position = new FormControl(this.positionOptions[1]);

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService, public dialog: MatDialog) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.userId = id !== null ? id : "DefaultBankName";
    this.unsubUser = this.getUser();
  }

  getUser() {
    const userDocRef = doc(this.firebaseService.firestore, "users", this.userId);
    return onSnapshot(userDocRef, user => {
      if (user.exists()) {
        this.user = new User(user.data());
        this.convertBirthdate();
      } else {
        console.log("No such document!");
      }
    });
  }

  ngOnDestroy(): void {
    if (this.unsubUser) {
      this.unsubUser();
    }
  }

  async deleteUser() {
    await this.firebaseService.deleteUserFromFirebase(this.userId);
  }

  convertBirthdate() {
    const date = new Date(this.user.birthDate);
    this.birthDate = date.toLocaleDateString();
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editUserAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
