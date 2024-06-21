import { Component, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  MessageFromCHild = "Hello parent I'm from child";
message!:string;
constructor(private shared:SharedService){

}
ngOnInit():void{
  this.message=this.shared.getMessage();
}
@Output() event = new EventEmitter<string>();



sendMessage(){
  this.event.emit(this.MessageFromCHild);
}
}
