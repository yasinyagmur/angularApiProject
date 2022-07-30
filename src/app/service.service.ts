import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly ApiUrl= "https://62c5797d134fa108c253480f.mockapi.io/fakeData"

  constructor(private http:HttpClient) { }

  
  getUserLıst():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl)
  }

  
  newAddUser(dataAdd:any) {
    return this.http.post(this.ApiUrl, dataAdd);
  }
  updateUser(id: number | string, editedNewData:any) {
    return this.http.put(this.ApiUrl + `/${id}`, editedNewData);
  }

  deleteUser(id:number | string) {
    return this.http.delete(this.ApiUrl + `/${id}`)
  }

}
