import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { SigninComponent } from './Auth/signin.component';
import { SignupComponent } from './Auth/signup.component';
import { routing } from './app.routing';
import { AuthService } from './auth.service';
import { TripEditComponent } from './trip/trip-edit/trip-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    TripEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      ReactiveFormsModule,
      routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
