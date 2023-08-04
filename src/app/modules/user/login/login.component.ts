import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private FormBuilder: FormBuilder, private customerService: CustomerService){}

 

  ngOnInit(data:any): void {
    this.loginForm=this.FormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(){
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.customerService.Login(username,password)
  }
  get username(){
    return this.loginForm.get('username')
  }
  get password(){
    return this.loginForm.get('password')
  }

    }
