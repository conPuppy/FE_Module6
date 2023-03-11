import {FormControl, FormGroup} from "@angular/forms";

export class AccountForChangeInfo{
    id!: number;
    fullName!:String;
    username!: String;
    email!:String;
    birthday!:Date;
    city!:String;
    country!:String;
    gender!:String

    constructor(id: number, fullName: String, username: String, email: String, birthday: Date, city: String, country: String, gender: String) {
        this.id = id;
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.birthday = birthday;
        this.city = city;
        this.country = country;
        this.gender = gender;
    }
}