import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
	@ViewChild('signUpForm') signUpForm: NgForm;
	roles = ["High School Student", "College Student", "Parent", "Graduate", "Other"];

	constructor(private authService: AuthService) { }

	ngOnInit() {

	}

	onSubmit(){ 
		this.authService.loggedIn = true;
		this.signUpForm.reset()
	}

}
