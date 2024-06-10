import { Injectable, inject } from "@angular/core";
import { Firestore, deleteDoc, doc, updateDoc } from "@angular/fire/firestore";
import { collection, addDoc } from "firebase/firestore";
import { User } from "../../models/user.class";
import { Product } from "../../models/product.class";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);

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
