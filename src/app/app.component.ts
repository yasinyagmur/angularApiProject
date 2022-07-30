import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'argustask';

  data:any;
  formObj:any;
  editNewData:any;
  userId:any;

  constructor( private service: ServiceService){
    
    this.service.getUserLıst().subscribe(res=>{
      this.data=res;
      console.log(this.data)
    })
  }


  addUser(formObj:any){
this.service.newAddUser(formObj).subscribe(res=>{
  this.formObj = res
})  }


deleteUser(userId: any) {
  this.service.deleteUser(userId).subscribe(res => {
    this.userId = res;

  });
}
}
