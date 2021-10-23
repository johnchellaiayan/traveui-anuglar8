import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  status:any;
  title = 'admin-panel-layout';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  login(){
    let status=localStorage.getItem('success');
// this.spinner.show()
  
    if(status=='success'){
      this.status=true
    }else{
      // localStorage.clear();
      this.status=false;
    }
    return this.status
  }
  login3(){
    let status=localStorage.getItem('success');
// this.spinner.show()
  
    if(status=='success'){
      this.status=false
    }else{
      localStorage.clear();
      this.status=true;
    }
    return this.status
  }
}
