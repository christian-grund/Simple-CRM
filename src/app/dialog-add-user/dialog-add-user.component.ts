import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
// import { Firestore, collection, addDoc } from '@angular/fire/firestore';
// import { CollectionReference, DocumentData } from '@firebase/firestore';
import { FirebaseService } from '../firebase-services/firebase.service';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  // firestore: Firestore = inject(Firestore);

  constructor(private firebase: FirebaseService) {}

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime(); // wandelt Datum in Timestamp um
    console.log('Current user is:', this.user);

    await this.firebase.addUserToFirebase(this.user);
  }
}
