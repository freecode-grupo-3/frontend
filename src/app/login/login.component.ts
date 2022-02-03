import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  /**
   * onSubmit()
   */
   public onSubmit() {
    console.log(this.form.valid, this.form.value);
    if( !this.form.valid ){
      console.error("Form Invalido", this.form.errors)
      return;
    }

    console.log("Logueando")
    // this.httpService.createClient(this.form.value).subscribe(
    //   response => {
    //     alert("Cliente creado")
    //     this.router.navigateByUrl('/client')
    //   }
    // )
    this.router.navigateByUrl(`/feed`)
    
  }

}
