import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData = { user: 'user', senha: 'senha' };
  apiUrl = 'http://localhost/teste/api/api/login.php';


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
   
    this.http.post(this.apiUrl, this.userData).subscribe((response) => {
      if (response === 'success') {
        this.router.navigate(['../folder']);
       } else {
        console.log("Error");
      }
      
    });
  }

}
