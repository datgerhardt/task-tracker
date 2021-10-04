import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

import { TaskInterface } from '../../Task';

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

  faTimes = faTimes;

  @Output() onDeleteTask: EventEmitter<TaskInterface> = new EventEmitter(); 
  @Output() onToggleReminder: EventEmitter<TaskInterface> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: TaskInterface){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: TaskInterface){
    this.onToggleReminder.emit(task);
  }
}
