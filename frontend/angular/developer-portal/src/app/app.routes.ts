import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { ColorComponent } from './pages/color/color.component';

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
];
