import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
user =  [
  {uid: 10, name: 'Jan', role: 'Developer'},
  {uid: 12, name: 'Feb', role: 'System Engineer'},
  {uid: 14, name: 'Mar', role: 'Programmer'},
  {uid: 16, name: 'Apr', role: 'Content writer'},
  {uid: 18, name: 'May', role: 'Analyst'}
];

  constructor() { }

  ngOnInit() {
  }

}
