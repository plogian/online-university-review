import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
	@ViewChild('signInForm') signInForm: NgForm;

	constructor(private authService: AuthService,
		private router: Router) { }

	ngOnInit() {

	}

	onSubmit(){ 
		this.authService.loggedIn = true;
		this.router.navigate(['/']);
	}

}
