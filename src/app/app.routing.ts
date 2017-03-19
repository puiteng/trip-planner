import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SigninComponent } from './Auth/signin.component';
import { SignupComponent } from './Auth/signup.component';
import { TripEditComponent } from './trip/trip-edit/trip-edit.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'trip-edit', component: TripEditComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
