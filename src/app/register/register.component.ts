import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  repeatPass: FormControl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpService:HttpService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPass: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      groups: ['admin'],
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

    if(this.form.value.repeatPass != this.form.value.password){
      console.error("Contraseñas no coinciden")
      return;
    }

    console.log("Registrando")
    // this.httpService.createClient(this.form.value).subscribe(
    //   response => {
    //     alert("Cliente creado")
    //     this.router.navigateByUrl('/client')
    //   }
    // )
    let id = 1;
    this.router.navigateByUrl(`/needs/${id}`)
    
  }

}
