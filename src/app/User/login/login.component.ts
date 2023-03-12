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
  //   this.accountService.login(this.loginForm.value).subscribe((data) => {
  //     this.account = data;
  //     this.checkLogin(this.account)
  //     Swal.fire(
  //         ' ',
  //         '<h2 style="color: green; font-size: 32px">Đăng nhập thành công!!!</h2>',
  //         'success'
  //     )
  //   }, (error) => {
  //     Swal.fire(
  //         ' ',
  //         '<h2 style="color: red; font-size: 32px">Tài khoản của bạn đã bị khoá hoặc sai mật khẩu!</h2>',
  //         'error'
  //     )
  //   })
  // }
  //
  // findAccountByUsername(username: String) {
  //   this.accountService.findAccountByUsername(username).subscribe((data) => {
  //   })
  // }
  //
  // checkLogin(accountToken: AccountToken) {
  //   this.accountService.setToken(accountToken.token);
  //   this.accountService.setAccountToken(accountToken);
  //   this.account = this.findAccountByUsername(accountToken.username);
  //   for (let i = 0; i < this.account?.roles.length; i++) {
  //     if (this.account.roles[i].id == 1) {
  //       this.router.navigate(["/admin"]);
  //       return;
  //     }
  //   }
  //   this.router.navigate(["/home"]);
  }
}
