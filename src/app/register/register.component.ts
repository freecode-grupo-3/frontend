import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

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
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPass: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      groups: ['paciente'],
    })

  }

  /**
   * onSubmit()
   */
   public onSubmit() {
    console.debug(this.form.valid, this.form.value);
    if( !this.form.valid ){
      console.error("Form Invalido", this.form.errors)
      return;
    }

    if(this.form.value.repeatPass != this.form.value.password){
      console.error("Contraseñas no coinciden")
      return;
    }

    console.debug("Registrando")

    this.userService.register(this.form.value).subscribe(response => {
      this.userService.login({username: this.form.value.username, password: this.form.value.password}).subscribe(response => {
        console.log('login succeeded on register')
        this.router.navigateByUrl('/needs')
      }, error => {
        console.log(error)
      })
    }, error => {
      // TODO: Pintar la UI para identificar que falló.
      console.log(error)
    })
    // let id = 1;
    // this.router.navigateByUrl(`/needs/${id}`)
    
  }

}
