import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { CustomValidationMessagesService } from './services/costume-validation-messages.service';
import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { appReducers } from './stores';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { FoodDataEffect } from './stores/food/food.effects';
import { taskReducer } from './stores/task-list/task-list.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      UiLibraryAngularModule.forRoot(CustomValidationMessagesService)
    ),
    provideStore(),
    provideState('root',appReducers),
    provideEffects(FoodDataEffect),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    })
  ],
}

