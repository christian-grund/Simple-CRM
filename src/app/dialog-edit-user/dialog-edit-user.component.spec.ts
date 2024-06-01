import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogEditUserComponent } from "./dialog-edit-user.component";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FirestoreModule } from "@angular/fire/firestore";
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { importProvidersFrom } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../../environments/environment";

describe("DialogEditUserComponent", () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUserComponent, FirestoreModule, FirebaseAppModule, MatDialogModule],
      providers: [
        importProvidersFrom(MatDialogModule, BrowserAnimationsModule),
        {
          provide: MatDialogRef,
          useValue: {}
        },
        provideFirebaseApp(() => initializeApp(environment.firebase))
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
