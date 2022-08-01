import { Component } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  data:any;
  formObj:any;
  editNewData:any;
  userId:any;

  constructor( private service: ServiceService) { 
    this.service.getUserLıst().subscribe(res=>{
      this.data=res;
      console.log(this.data)
    })
  }
  addUser(formObj:any){
    this.service.newAddUser(formObj).subscribe(res=>{
      this.formObj = res;
      this.service.getUserLıst().subscribe(response=>{
        this.data=response
      })
    })  }
    
    
    deleteUser(userId: any) {
      this.service.deleteUser(userId).subscribe(res => {
        this.userId = res;
        this.service.getUserLıst().subscribe(response=>{
          this.data=response
        })
        
    
      });
    }
    }


