import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../service/account/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private accountService: AccountService, private router: Router) {
  }
  ngOnInit(): void {

  }

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)

  })
  login(){
    this.accountService.login(this.loginForm.value).subscribe((data)=>{
      console.log(data)
      this.accountService.setToken(data.token);
      this.accountService.setAccountToken(data);
      this.router.navigate(["/home"]);
    })
  }
}
