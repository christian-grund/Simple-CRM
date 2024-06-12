import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogEditAddressComponent } from "./dialog-edit-address.component";
import { FirestoreModule, getFirestore, provideFirestore } from "@angular/fire/firestore";
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { environment } from "../../environments/environment";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("DialogEditAddressComponent", () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditAddressComponent, MatDialogModule, FirestoreModule, FirebaseAppModule, NoopAnimationsModule],
      providers: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
