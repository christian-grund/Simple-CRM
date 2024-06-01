import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserComponent } from "./user.component";
import { FirestoreModule } from "@angular/fire/firestore";
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../../environments/environment";

describe("UserComponent", () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent, FirestoreModule, FirebaseAppModule],
      providers: [provideFirebaseApp(() => initializeApp(environment.firebase))]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
