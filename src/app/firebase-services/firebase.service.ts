import { Injectable, inject } from "@angular/core";
import { Firestore, deleteDoc, doc, onSnapshot, updateDoc } from "@angular/fire/firestore";
import { collection, addDoc } from "firebase/firestore";
import { User } from "../../models/user.class";
import { Product } from "../../models/product.class";
import { MatTableDataSource } from "@angular/material/table";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);

  // public users: User[] = [];
  unsubUsers;
  allUsers: User[] = [];
  dataSource = new MatTableDataSource<User>(this.allUsers);

  constructor() {
    this.unsubUsers = this.subUsers();
  }

  subUsers() {
    return onSnapshot(collection(this.firestore, "users"), changes => {
      this.allUsers = [];
      changes.forEach(doc => {
        const userID = doc.id;
        const userData = doc.data();
        const user = new User(userData);
        user.id = userID;
        this.allUsers.push(user);
      });
      console.log("allUsers:", this.allUsers);
      this.dataSource.data = this.allUsers;
    });
  }

  ngOnDestroy(): void {
    if (this.unsubUsers) {
      this.unsubUsers();
    }
  }

  async addUserToFirebase(user: User): Promise<void> {
    await addDoc(this.getCollectionRef("users"), user.toJSON()).catch(err => {
      console.error(err);
    });
  }

  async updateUserInFirebase(docId: string, user: User) {
    await updateDoc(this.getSingleDocRef("users", docId), user.toJSON()).catch(err => {
      console.error(err);
    });
  }

  async deleteUserFromFirebase(docId: string) {
    await deleteDoc(this.getSingleDocRef("users", docId)).catch(err => {
      console.error(err);
    });
  }

  async addProductToFirebase(product: Product): Promise<void> {
    await addDoc(this.getCollectionRef("products"), product.toJSON()).catch(err => {
      console.error(err);
    });
    console.log("addProductToFirebase:", product.toJSON());
  }

  async updateProductInFirebase(docId: string, user: User) {
    await updateDoc(this.getSingleDocRef("products", docId), user.toJSON()).catch(err => {
      console.error(err);
    });
  }

  async deleteProductFromFirebase(docId: string) {
    await deleteDoc(this.getSingleDocRef("products", docId)).catch(err => {
      console.error(err);
    });
  }

  getCollectionRef(colRef: string) {
    return collection(this.firestore, colRef);
  }

  getSingleDocRef(colRef: string, docId: string) {
    return doc(collection(this.firestore, colRef), docId);
  }
}
