import { Injectable, inject } from "@angular/core";
import { Firestore, doc, updateDoc } from "@angular/fire/firestore";
import { collection, addDoc } from "firebase/firestore";
import { User } from "../../models/user.class";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);

  async addUserToFirebase(user: User): Promise<void> {
    try {
      const userDocRef = await addDoc(collection(this.firestore, "users"), user.toJSON());
      user.id = userDocRef.id;
      await updateDoc(userDocRef, { id: user.id });
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  }

  getCollectionRef() {
    return collection(this.firestore, "users");
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
