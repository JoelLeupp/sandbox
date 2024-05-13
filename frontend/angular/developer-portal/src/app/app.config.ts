import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { CustomValidationMessagesService } from './services/costume-validation-messages.service';
import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { taskReducer } from './stores/task-list/task-list.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      UiLibraryAngularModule.forRoot(CustomValidationMessagesService)
    ),
    provideStore(),
    provideState({ name: 'taskList', reducer: taskReducer }),
  ],
};
