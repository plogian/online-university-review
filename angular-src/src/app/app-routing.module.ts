//Import Angular Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import Components
import { CenterfoldComponent } from './centerfold/centerfold.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ReviewFormComponent } from './review-form/review-form.component';

const appRoutes: Routes = [
	{ path: 'signin', component: SignInComponent}, 
	{ path: 'signup', component: SignUpComponent},
	{ path: 'reviews/new', component: ReviewFormComponent },
	{ path: '', component: CenterfoldComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})

//putting a semi-colon at the end of NgModule broke this. What, why?

export class AppRoutingModule {

}