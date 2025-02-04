import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from '../../Models/itask';
import { TasksService } from '../../Services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {


  constructor(private tasksService:TasksService){}

  @Input({required: true}) userId!:string;
  @Input({required: true}) name!: string;
  isAddingTask:boolean=false;


  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }



  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }


}
