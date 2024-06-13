import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule, TooltipPosition } from "@angular/material/tooltip";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { DialogAddUserComponent } from "./dialog-add-user/dialog-add-user.component";
import { MatCardModule } from "@angular/material/card";
import { FirebaseService } from "../services/firebase-services/firebase.service";
import { CommonModule } from "@angular/common";
import { User } from "../../models/user.class";
import { RouterLink } from "@angular/router";
import { MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule, RouterLink, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss"
})
export class UserComponent implements AfterViewInit {
  positionOptions: TooltipPosition[] = ["below", "above", "left", "right"];
  position = new FormControl(this.positionOptions[1]);

  user = this.firebaseService.allUsers;

  displayedColumns: string[] = ["firstName", "lastName", "email", "city"];
  dataSource = this.firebaseService.dataSource;
  clickedRows = new Set<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
