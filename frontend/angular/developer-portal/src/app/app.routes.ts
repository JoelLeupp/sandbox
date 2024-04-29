import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { ColorComponent } from './pages/color/color.component';
import { StateComponent } from './pages/state/state.component';
import { StateComponentComponent } from './pages/state/state-component/state-component.component';
import { StateServiceComponent } from './pages/state/state-service/state-service.component';
import { StateNgrxComponent } from './pages/state/state-ngrx/state-ngrx.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'state/:method',
    component: StateComponent,
  },
    {
    path: 'state-component',
    component: StateComponentComponent,
  },
    {
    path: 'state-service',
    component: StateServiceComponent,
  },
    {
    path: 'state-ngrx',
    component: StateNgrxComponent,
  },
];
