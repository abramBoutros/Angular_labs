import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec1',
  templateUrl: './sec1.component.html',
  styleUrls: ['./sec1.component.css']
})
export class Sec1Component implements OnInit {

  constructor() { }

  fullName:string = "Abram Boutros"
  jobTitle:string = "Software Engineer"

  ngOnInit(): void {
  }

}
