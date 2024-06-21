import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnInit {
constructor(private shared:SharedService){}
message="Hey! Iam child1 of shared service";
ngOnInit(): void {
  this.shared.setMessage(this.message);
}
@Input() data!:string;
}
