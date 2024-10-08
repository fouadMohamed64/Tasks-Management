import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../../Models/itask';
import { TasksService } from '../../../Services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  constructor(private tasksService:TasksService){}
  @Input({required: true}) userId!: string
  @Output() close = new EventEmitter<void>()
  // @Output() add = new EventEmitter<NewTaskData>()

  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''

  onCancel(){
    this.close.emit()
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId)
    
    this.close.emit()
  }

}
