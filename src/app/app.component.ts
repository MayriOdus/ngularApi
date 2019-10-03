import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularApi';
  constructor(private http:HttpClient){

  }
  onSubmit(data){
    alert(JSON.stringify(data));
    //let postdata = {username: data.username, password: data.password};
    this.http.post<any>('http://localhost:8080/api/register',data).subscribe(result=>{
      alert(JSON.stringify(result));
    })
    
  }
  ngOnInit():void{
    // let data = {username: "may", password :"1234"};
    // this.http.post<any>('http://localhost:8080/api/register',data).subscribe(result=>{
    //   alert(JSON.stringify(result));
    // })
  }
}


