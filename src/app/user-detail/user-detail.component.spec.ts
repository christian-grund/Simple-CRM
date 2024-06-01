import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserDetailComponent } from "./user-detail.component";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Router } from "express";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../../environments/environment";
import { FirestoreModule } from "@angular/fire/firestore";
import { provideNativeDateAdapter } from "@angular/material/core";

describe("UserDetailComponent", () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: (key: string) => "someDefaultValue"
      },
      queryParamMap: {
        get: (key: string) => "someQueryValue"
      }
    }
  };

  // RouterModule.forRoot([])
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [UserDetailComponent, RouterModule, MatDialogModule, MatCardModule, MatIconModule, MatMenuModule, FirestoreModule, FirebaseAppModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock
        },
        provideFirebaseApp(() => initializeApp(environment.firebase))
      ]
    });

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
