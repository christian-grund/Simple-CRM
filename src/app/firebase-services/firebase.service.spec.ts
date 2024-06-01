import { TestBed } from "@angular/core/testing";

import { FirebaseService } from "./firebase.service";
import { FirestoreModule } from "@angular/fire/firestore";
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../../environments/environment";

describe("FirebaseService", () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirestoreModule, FirebaseAppModule],
      providers: [provideFirebaseApp(() => initializeApp(environment.firebase))]
    });
    service = TestBed.inject(FirebaseService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
