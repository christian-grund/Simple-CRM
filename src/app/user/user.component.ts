import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
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
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule, RouterLink, MatTableModule, MatPaginatorModule],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss"
})
export class UserComponent implements OnDestroy, AfterViewInit {
  positionOptions: TooltipPosition[] = ["below", "above", "left", "right"];
  position = new FormControl(this.positionOptions[1]);

  unsubUsers!: any;

  allUsers: User[] = [];

  displayedColumns: string[] = ["firstName", "lastName", "email", "city"];
  dataSource = new MatTableDataSource<User>(this.allUsers);
  clickedRows = new Set<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private firebaseService: FirebaseService) {
    this.unsubUsers = this.subUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
      this.dataSource.data = this.allUsers;
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
