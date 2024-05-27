import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simple-crm-ba78f',
        appId: '1:840294484431:web:8a82acc042925c57712aba',
        storageBucket: 'simple-crm-ba78f.appspot.com',
        apiKey: 'AIzaSyAcye3HXKWeq7sw0GvqTKxjVE9zsuz_A6Q',
        authDomain: 'simple-crm-ba78f.firebaseapp.com',
        messagingSenderId: '840294484431',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
