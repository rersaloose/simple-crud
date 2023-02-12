import { LoginService } from './../../services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { animate, transition, trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('void', style({
        width:'0%',
   
        opacity: 0,
        // backgroundColor: 'red'
      })),
      state('*', style({
        width:'100%',
      
        opacity: 1,
        
      })),
      transition('void <=> *', [
        animate('1s')
      ]),
 
    ]),
  ],
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showSpinner:boolean=false
  constructor(
    private formbiuld: FormBuilder,
    private LoginService: LoginService,
    private router: Router,
    private toster:ToastrService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formbiuld.group({
      email: [''],
      password: [''],
    });
  }
  login() {
this.showSpinner=true
    this.LoginService.loginn(this.loginForm.value).subscribe((res: any) => {
      this.toster.success('success','login Done')
      this.showSpinner=false
      localStorage.setItem('token', res.token);
      localStorage.setItem('companyId', res.companyId);
     
      localStorage.setItem('branchId', res.branchId);
      localStorage.setItem('employeeId', res.employeeId);
      localStorage.setItem('userName', res.userName);
      this.router.navigate(['/bank']);
    });
  }
}

