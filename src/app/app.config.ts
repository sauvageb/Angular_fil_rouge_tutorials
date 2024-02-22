import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";
import {BASE_API_URL} from "./constants/injection";
import {environment} from "../environments/environment";
import {MatNativeDateModule} from "@angular/material/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule), // here
    {
      provide: BASE_API_URL,
      useValue: environment.BASE_API_URL
    }
  ]
};
