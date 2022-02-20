import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {



  constructor() { }
  todo:string = '';
  todos:any = [];

  @Output() childEvent = new EventEmitter();

  clickMe() {
    console.log('test',this.todo);
    this.todos.push(this.todo);
    console.log('test2',this.todos);

    this.childEvent.emit(this.todos)

  }

  ngOnInit(): void {
  }



}
