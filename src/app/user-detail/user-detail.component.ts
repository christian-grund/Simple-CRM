import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ActivatedRoute } from "@angular/router";
import { FirebaseService } from "../firebase-services/firebase.service";
import { collection, doc, onSnapshot } from "@angular/fire/firestore";
import { User } from "../../models/user.class";

@Component({
  selector: "app-user-detail",
  standalone: true,
  imports: [MatCardModule],
  templateUrl: "./user-detail.component.html",
  styleUrl: "./user-detail.component.scss"
})
export class UserDetailComponent implements OnInit, OnDestroy {
  userId!: string;
  user: User = new User();
  unsubUser!: () => void;

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.userId = id !== null ? id : "DefaultBankName";
    // console.log('userId:', this.userId);
    this.unsubUser = this.getUser();
  }

  getUser() {
    const userDocRef = doc(this.firebaseService.firestore, "users", this.userId);
    return onSnapshot(userDocRef, user => {
      if (user.exists()) {
        this.user = new User(user.data());
        console.log("user:", this.user);
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
}
