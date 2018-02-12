import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CenterfoldComponent } from './centerfold/centerfold.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ReviewFormComponent } from './review-form/review-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterfoldComponent,
    SignInComponent,
    SignUpComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
