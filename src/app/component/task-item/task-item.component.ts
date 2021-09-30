import { Component, OnInit, Input } from '@angular/core';

import { TaskInterface } from '../../mock-task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: TaskInterface =  { id: 1,
                                    text: "Doctor's Appointment",
                                    date: "May 5  2021",
                                    time: "2:30 pm",
                                    reminder: true}; 

  constructor() { }

  ngOnInit(): void {
  }

}
