import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from '../../Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text: string = '';
  date: string = '';
  time: string = '';
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<TaskInterface> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.text){
      alert("Please add a task");
      return;
    }
    const newTask : TaskInterface= {
      text : this.text,
      date :  this.date, 
      time : this.time, 
      reminder : this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text ='';
    this.date ='';
    this.time ='';
    this.reminder = false;
  }

}