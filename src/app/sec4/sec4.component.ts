import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec4',
  templateUrl: './sec4.component.html',
  styleUrls: ['./sec4.component.css']
})
export class Sec4Component implements OnInit {

  constructor() { }

  projects=["Project #1","Project #2","Project #3","Project #4","Project #5","Project #6"];
  

  ngOnInit(): void {
  }

}
