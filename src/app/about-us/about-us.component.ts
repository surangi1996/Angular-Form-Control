import { Component, OnInit } from '@angular/core';

export interface Employee {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  employees: Employee[] = [
    {id: "1", email: "test@gmail.com", name: "surangi", password: "1234"},
    {id: "2", email: "test1@gmail.com", name: "kanchana", password: "12345"},
    {id: "3", email: "test2@gmail.com", name: "kamal", password: "123456"}
  ]

  constructor() { }

  ngOnInit(){
  }



}
