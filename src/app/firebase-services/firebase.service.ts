import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { User } from '../../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);

  async addUserToFirebase(user: User): Promise<void> {
    try {
      const userDoc = await addDoc(
        collection(this.firestore, 'users'),
        user.toJSON()
      );
      console.log('Document written with ID: ', userDoc.id);
    } catch (err) {
      console.error(err);
    }
  }

  // getUserRef() {
  //   return collection(this.firestore, 'users');
  // }
}
