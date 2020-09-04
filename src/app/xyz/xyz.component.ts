import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/Todo'

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  todos:Todo[]
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: false
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      },
      {
        id: 4,
        title: 'Todo Four',
        completed: false
      }
    ]
  }

}
