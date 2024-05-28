import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { User } from '../../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);

  async addUserToFirebase(user: User) {
    addDoc(collection(this.firestore, 'users'), user.toJSON())
      .catch((err) => {
        console.error(err);
      })
      .then((user) => {
        console.log('Document written with ID: ', user);
      });
  }

  // getUserRef() {
  //   return collection(this.firestore, 'users');
  // }
}
