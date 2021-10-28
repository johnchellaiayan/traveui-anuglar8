import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username:any;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
    let firstName=localStorage.getItem('uname');
    let lastName=localStorage.getItem('lname');
    
    this.username= firstName+" " +lastName;
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  clear(){
    localStorage.clear();
  }
}
