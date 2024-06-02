import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogAddUserComponent } from "./dialog-add-user.component";
import { Firestore } from "@angular/fire/firestore/firebase";
import { FirestoreModule } from "@angular/fire/firestore";
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../../environments/environment";

describe("DialogAddUserComponent", () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddUserComponent, MatDialogModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, FormsModule, MatInputModule, BrowserAnimationsModule, FirestoreModule],
      providers: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    // expect(component).toBeTruthy();
  });
});
