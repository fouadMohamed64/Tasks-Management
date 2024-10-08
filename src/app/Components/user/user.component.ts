import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../Models/iuser';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({required: true}) id!:string; 
  // @Input({required: true}) avatar!:string
  // @Input({required: true}) name!:string

  @Input({required: true}) user!:IUser
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>()

  get imagePath(){
    return `assets/users/${this.user.avatar}`
  }

  onSelectedUser(){
    this.select.emit(this.user.id)
  }


  // using signal
  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(()=>{
  //   return `assets/users/${this.avatar()}`
  // })




}
