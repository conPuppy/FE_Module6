import {Component, OnInit} from '@angular/core';
import {AccountService} from "../service/account/account.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountForChangeInfo} from "../model/AccountForChangeInfo";

@Component({
    selector: 'app-change-info',
    templateUrl: './change-info.component.html',
    styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {
    constructor(private accountService: AccountService) {
    }

    account!: AccountForChangeInfo;
    id!: number;
    formChangeInfo:any;
    ngOnInit() {
        this.formChangeInfo= new FormGroup({
            id: new FormControl(),
            fullName: new FormControl(),
            username: new FormControl(),
            email: new FormControl(),
            birthday: new FormControl(),
            city: new FormControl(),
            country: new FormControl(),
            genderObj: new FormGroup({
                gender: new FormControl()
            }),
        })
        this.id = this.accountService.getAccountToken().id
        this.accountService.findById(this.id).subscribe((res) => {
            this.formChangeInfo.get('id').setValue(res.id)
            this.formChangeInfo.get('fullName').setValue(res.fullName)
            this.formChangeInfo.get('username').setValue(res.username)
            this.formChangeInfo.get('email').setValue(res.email)
            this.formChangeInfo.get('birthday').setValue(res.birthday)
            this.formChangeInfo.get('city').setValue(res.city)
            this.formChangeInfo.get('country').setValue(res.country)
            this.formChangeInfo.get('genderObj').get('gender').setValue(res.gender)
        })
    }
    changeInfo(){
        this.account=this.formChangeInfo.value;
        this.account.gender=this.formChangeInfo.value.genderObj.gender
        console.log(this.account)
        this.accountService.changeInfo(this.account).subscribe(res=> alert("them alert vip sau"))
    }
}
