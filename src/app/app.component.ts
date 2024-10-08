import { Component } from '@angular/core';
import { HeaderComponent } from './Components/Header/header.component';
import { UserComponent } from "./Components/user/user.component";
import { DUMMY_USERS } from './dumy-users';
import { TasksComponent } from "./Components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  users = DUMMY_USERS;
  selectedUserId?:string 

  get selectedUser(){
    return this.users.find((user)=> user.id == this.selectedUserId)!
  }


  onSelectUser(id:string){
    this.selectedUserId = id;
  }

}
