import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { CommonService } from '../service/common.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})

/**
 * LoginComponent is used to perform login related operation
 */
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  globelUrl: string;

  constructor(private fb: FormBuilder, private messageService: MessageService, private router: Router, private service: CommonService, ) {
    this.globelUrl = environment.localPath;
  }

  ngOnInit() {
    /**
     * loginFrom field Validation
     */
    this.loginForm = new FormGroup({
      mailId: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
  }

  /**
   * onLogin() is used to login page validation* 
   * if user name and password correct it will allow to next approver page
   */
  onLogin() {
    this.service.postHttpRequest(this.globelUrl + 'approver/login', this.loginForm.value).subscribe(res => {
      localStorage.setItem('UserDetails', JSON.stringify(res));
      this.router.navigate(['/approver']);
    }, (err => {
      this.messageService.add({ severity: 'error', summary: ' ', detail: err.error.message });
    }));
    this.loginForm.reset();
  }

}
