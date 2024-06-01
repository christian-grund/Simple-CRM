import { Injectable, inject } from "@angular/core";
import { Firestore, deleteDoc, doc, updateDoc } from "@angular/fire/firestore";
import { collection, addDoc } from "firebase/firestore";
import { User } from "../../models/user.class";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);

  async addUserToFirebase(user: User): Promise<void> {
    await addDoc(this.getCollectionRef(), user.toJSON());
  }

  async updateUserInFirebase(docId: string, user: User) {
    await updateDoc(this.getSingleDocRef(docId), user.toJSON());
  }

  async deleteUserFromFirebase(docId: string) {
    await deleteDoc(this.getSingleDocRef(docId));
  }

  getCollectionRef() {
    return collection(this.firestore, "users");
  }

  getSingleDocRef(docId: string) {
    return doc(collection(this.firestore, "users"), docId);
  }
}
