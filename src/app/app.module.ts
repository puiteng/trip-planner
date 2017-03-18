import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { SigninComponent } from './Auth/signin.component';
import { SignupComponent } from './Auth/signup.component';
import { routing } from './app.routing';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent
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
