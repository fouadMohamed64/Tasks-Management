import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../Models/itask';
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule } from '@angular/common';
import { TasksService } from '../../../Services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  constructor(private tasksService:TasksService){}

  @Input({required: true}) task!:ITask
  // @Output() complete = new EventEmitter<string>()


  onCompleteTask(){
    return this.tasksService.removeTask(this.task.id)
  }

}
