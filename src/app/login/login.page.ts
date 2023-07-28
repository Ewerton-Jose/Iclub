import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dados = { user: '', senha: '' };
  apiUrl = 'http://127.0.0.1/teste/api/api/login.php';


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    this.http.post<any>(this.apiUrl, this.dados).subscribe(
      (response: any) => {
        if (response && response.status === 'success') {
          this.router.navigate(['../folder']);
        } else {
          console.log("Error");
        }
      },
      (error) => {
        console.log("Erro na requisição:", error);
      }
    );
  }

}
