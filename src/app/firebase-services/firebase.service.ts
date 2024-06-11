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
  allUsers: User[] = [];
  allProducts: Product[] = [];
  dataSource = new MatTableDataSource<User>(this.allUsers);
  dataSourceProducts = new MatTableDataSource<Product>(this.allProducts);
  unsubUsers;
  unsubProducts;

  constructor() {
    this.unsubUsers = this.subUsers();
    this.unsubProducts = this.subProducts();
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
      this.dataSource.data = this.allUsers;
    });
  }

  subProducts() {
    return onSnapshot(this.getCollectionRef("products"), changes => {
      this.allProducts = [];
      changes.forEach(doc => {
        const productData = doc.data();
        productData["id"] = doc.id;
        const product = new Product(productData);
        this.allProducts.push(product);
      });
      // console.log("allProducts:", this.allProducts);
      this.dataSourceProducts.data = this.allProducts;
    });
  }

  ngOnDestroy(): void {
    if (this.unsubUsers) {
      this.unsubUsers();
    }
    if (this.unsubProducts) {
      this.unsubProducts();
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
