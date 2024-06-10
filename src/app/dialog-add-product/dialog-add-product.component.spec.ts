import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DialogAddProductComponent } from "./dialog-add-product.component";
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

describe("DialogAddProductComponent", () => {
  let component: DialogAddProductComponent;
  let fixture: ComponentFixture<DialogAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddProductComponent, MatDialogModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, FormsModule, MatInputModule, BrowserAnimationsModule, FirestoreModule],
      providers: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    // expect(component).toBeTruthy();
  });
});
