import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../service/AccountService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private accountService: AccountService, private router:Router) {
  }
  formRegister!:FormGroup;
  today!:any
  ngOnInit() {
    this.today= new Date().toISOString().split("T")[0];
    console.log(this.today)
    this.formRegister= new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      birthday: new FormControl(''),
    })
  }
  createAccount(){
    this.accountService.createAccount(this.formRegister.value).subscribe(
        res=>{
          this.router.navigate(["/home"])
        }
    )
  }
}
