import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  //1 way data binding
  message:string = "Hello Angular";
  //variable Object
  profile = {
    "name":"Tammalak.S" ,
    "tel":"099" ,
    "gender":"male"
  } 
  //2 way data binding
  userData = {
    "email":"" ,
    "password":""
  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submitLogin(){
    //alert("Hey Angular");
    if (this.userData.email == "admin@email.com" && this.userData.password == "1234") {
      //alert("Login success");
      this.router.navigate(['backend']);
    }
    else{
      alert("Login Fail !!!");
    }
  }
  
}
