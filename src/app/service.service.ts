import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly ApiUrl= "https://localhost:7233/api"
  // readonly ApiUrl= "https://62c5797d134fa108c253480f.mockapi.io/fakeData"

  constructor(private http:HttpClient) { }

  
  getUserLıst():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+`/ArgusUsers`)
    //MockApi 
    // return this.http.get<any>(this.ApiUrl)

  }

  
  newAddUser(data:any) {
    return this.http.post(this.ApiUrl+"/ArgusUsers/PostArgusUser", data);
    //Mock Api
    return this.http.post(this.ApiUrl, data); 

  }


  deleteUser(id:number | string) {
    return this.http.delete(this.ApiUrl + `/ArgusUsers/${id}`);
    //Mock APi
    // return this.http.delete(this.ApiUrl + `/${id}`);
  }

}
