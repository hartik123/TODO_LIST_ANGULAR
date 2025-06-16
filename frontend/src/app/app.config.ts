import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';


import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { todoReducer } from '../store/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({todoState: todoReducer}),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), // standard HttpClient
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }, provideStore()]
};
