import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule, TooltipPosition } from "@angular/material/tooltip";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { DialogAddUserComponent } from "../dialog-add-user/dialog-add-user.component";
import { MatCardModule } from "@angular/material/card";
import { FirebaseService } from "../firebase-services/firebase.service";
import { onSnapshot } from "firebase/firestore";
import { collection } from "@angular/fire/firestore";
import { CommonModule } from "@angular/common";
import { User } from "../../models/user.class";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule, RouterLink],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss"
})
export class UserComponent implements OnDestroy {
  positionOptions: TooltipPosition[] = ["below", "above", "left", "right"];
  position = new FormControl(this.positionOptions[1]);

  unsubUsers!: any;

  allUsers: User[] = [];

  constructor(public dialog: MatDialog, private firebaseService: FirebaseService) {
    this.unsubUsers = this.subUsers();
  }

  subUsers() {
    return onSnapshot(collection(this.firebaseService.firestore, "users"), changes => {
      this.allUsers = [];
      changes.forEach(doc => {
        const userID = doc.id;
        const userData = doc.data();
        const user = new User(userData);
        user.id = userID;
        this.allUsers.push(user);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.unsubUsers) {
      this.unsubUsers();
    }
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
