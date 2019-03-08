import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }
arr = [{
    "FirstName": "Vipin",
    "LastName": "Sharma",
    "Email": "Vipin@gmail.com",
    "Id": 6210,
    "PhoneNumber": 9509213414,
    "Designation": "Trainee",
    "DOB": 22/11/1995
},
]
  newArray;

  setdata() {
    this.newArray = this.arr;
  }
  getdata() {
    return this.newArray;
  }
}
