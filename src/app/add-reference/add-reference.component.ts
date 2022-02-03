import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiseasesAndNeedsService } from '../services/diseases-and-needs.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-reference',
  templateUrl: './add-reference.component.html',
  styleUrls: ['./add-reference.component.css']
})
export class AddReferenceComponent implements OnInit {

  types: Array<any> = ['enfermedad', 'medicina']
  form: FormGroup;

  list: { id: number; name: string; description: string; }[];
  
  diseases: { id: number; name: string; description: string; }[];
  needs: { id: number; name: string; description: string; }[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpService:HttpService,
    private dnService: DiseasesAndNeedsService,
  ) { }

  ngOnInit(): void {

    this.dnService.diseases().subscribe(
      diseases => {
        this.diseases = diseases;
        this.list = diseases;
      }
    )

    this.dnService.needs().subscribe(
      needs => {
        this.needs = needs;
      }
    )

    this.form = this.fb.group({
      type: [this.types[0], Validators.required],
      name: ['', Validators.required],
      element: ['', Validators.required]
    })

  }

  /**
   * selectType
   */
  public selectType() {
    
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

    let id = 1;
    this.router.navigateByUrl(`/needs/${id}`)
    
  }

}
