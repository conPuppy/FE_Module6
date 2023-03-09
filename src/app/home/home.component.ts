import {Component, OnInit} from '@angular/core';
import {Account} from "../model/Account";
import {AccountService} from "../service/account/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
  }


}
