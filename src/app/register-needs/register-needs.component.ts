import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-needs',
  templateUrl: './register-needs.component.html',
  styleUrls: ['./register-needs.component.css']
})
export class RegisterNeedsComponent implements OnInit {

  userID: number;
  enfermedades = [
    {name: 'Enfermedad 1', id: 1},
    {name: 'Enfermedad 2', id: 2},
    {name: 'Enfermedad 3', id: 3},
  ]

  medicinas = [
    {name: 'Medicinas 1', id: 1},
    {name: 'Medicinas 2', id: 2},
    {name: 'Medicinas 3', id: 3},
  ]

  tratamientos = [
    {name: 'Tratamientos 1', id: 1},
    {name: 'Tratamientos 2', id: 2},
    {name: 'Tratamientos 3', id: 3},
    {name: 'Tratamientos 4', id: 4},
    {name: 'Tratamientos 5', id: 5},
  ]

  enfermedadesList: Array<any> = [];
  medicinasList: Array<any> = [];
  tratamientosList: Array<any> = [];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // Obtener id de la propiedad
    this.userID = Number(this.route.snapshot.paramMap.get('id'));
    
  }

  /**
   * selectEnfermedad
   */
  public selectEnfermedad(event, id) {
    let tag = event.target;
    // Add class selected
    if (tag.classList.contains('selected')){
      tag.classList.remove('selected')
      const index = this.enfermedadesList.indexOf(id);
      this.enfermedadesList.splice(index,1);
    }
    else{
      tag.classList.add('selected')
      this.enfermedadesList.push(id)
    }
  }

  /**
   * selectMedicina
   */
   public selectMedicina(event, id) {
    let tag = event.target;
    // Add class selected
    if (tag.classList.contains('selected')){
      tag.classList.remove('selected')
      const index = this.medicinasList.indexOf(id);
      this.medicinasList.splice(index,1);
    }
    else{
      tag.classList.add('selected')
      this.medicinasList.push(id)
    }
    
  }

  /**
   * selectTratamiento
   */
   public selectTratamiento(event, id) {
    let tag = event.target;
    // Add class selected
    if (tag.classList.contains('selected')){
      tag.classList.remove('selected')
      const index = this.tratamientosList.indexOf(id);
      this.tratamientosList.splice(index,1);
    }
    else{
      tag.classList.add('selected')
      this.tratamientosList.push(id)
    }
  }

  /**
   * submit
   */
  public submit() {
    console.log(this.userID);
    
    console.log("Enfermedades: ", this.enfermedadesList);
    console.log("Medicinas: ", this.medicinasList);
    console.log("Tratamientos: ", this.tratamientosList);
    
    
    
  }

}
