import { AfterViewChecked, AfterViewInit, Component, ViewChild  } from '@angular/core';

// import { TasksComponent } from './tasks/tasks.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
@Component({
    selector: 'app-root',
    standalone: true,
    // imports: [TasksComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [Child1Component,Child2Component],

})
export class AppComponent{
  message= "wellcome to the vjl It solutions";
  messageFromChild="";
  receiveMessage($event:string){
  this.messageFromChild=$event
  }







  // @ViewChild(Child2Component) child ;

  // constructor(){
  //   console.log(this.child)
  // }


  // ngAfterViewInit(){
  //   console.log(this.child);
  //   this.message = this.child.childcomp;
  // }
  // parentMessage :string = "message from parent component";

  // Event handler for when a task is clicked
  // handleTaskClicked(task: string): void {
  //   console.log(`Task clicked: ${task}`);
  // }
}
