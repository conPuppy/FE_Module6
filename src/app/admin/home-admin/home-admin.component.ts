import {Component, OnInit} from '@angular/core';
import {Account} from "../../models/Account";
import {AccountService} from "../../service/account/account.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit{

  accounts: Account[] = []

  formSearch: FormGroup = new FormGroup({
    search: new FormControl()
  });

  stringSearch: any;
  account!: Account;

  constructor(private accountService: AccountService) {
  }
  ngOnInit(): void {
    this.getAllAccount();
  }

  getAllAccount() {
    this.accountService.getAllAccount().subscribe((data) => {
      this.accounts = data;
      console.log(data)
    })
  }

  blockAccount(id: number) {
    this.accountService.blockAccount(id).subscribe(() =>{
      this.getAllAccount();
    })
  }

  upVip(id: number) {
    this.accountService.upVip(id).subscribe(() => {
      this.getAllAccount();
    })
  }


  search() {
    this.stringSearch = this.formSearch.controls["search"].value
    if (this.stringSearch != "") {
      this.accountService.search(this.stringSearch).subscribe((data) => {
        this.accounts = data;
      })
    } else {
      this.getAllAccount();
    }
  }


  findAccountById(id: number) {
    this.accountService.findById(id).subscribe((data) => {
      this.account = data;
    })
  }


}
