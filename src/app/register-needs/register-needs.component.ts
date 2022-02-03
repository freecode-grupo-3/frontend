import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseasesAndNeedsService } from '../services/diseases-and-needs.service';

@Component({
  selector: 'app-register-needs',
  templateUrl: './register-needs.component.html',
  styleUrls: ['./register-needs.component.css']
})
export class RegisterNeedsComponent implements OnInit {

  userID: number;
  diseases: {name: string, id: number}[];
  needs: Array<{name: string, id: number}>;

  diseasesList: {name: string, id: number}[];
  needList: {name: string, id: number}[];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private diseasesAndNeedsService: DiseasesAndNeedsService
  ) {
  }

  ngOnInit(): void {
    // Obtener id de la propiedad
    this.userID = Number(this.route.snapshot.paramMap.get('id'));

    this.diseasesAndNeedsService.diseases().subscribe(response => {
      this.diseases = response.map(r => ({
        id: r.id,
        name: r.name
      }))
    }, error => {
      console.error(error)
    })

    this.diseasesAndNeedsService.needs().subscribe(response => {
      this.needs = response.map(r => ({
        id: r.id,
        name: r.name
      }))
    }, error => {
      console.error(error)
    })

  }

  /**
   * selectEnfermedad
   */
  public selectDisease(event, id) {
    let tag = event.target;
    // Add class selected
    if (tag.classList.contains('selected')){
      tag.classList.remove('selected')
      const index = this.diseasesList.indexOf(id);
      this.diseasesList.splice(index,1);
    }
    else{
      tag.classList.add('selected')
      this.diseasesList.push(id)
    }
  }

  /**
   * selectMedicina
   */
   public selectNeed(event, id) {
    let tag = event.target;
    // Add class selected
    if (tag.classList.contains('selected')){
      tag.classList.remove('selected')
      const index = this.needList.indexOf(id);
      this.needList.splice(index,1);
    }
    else{
      tag.classList.add('selected')
      this.needList.push(id)
    }
    
  }

  /**
   * submit
   */
  public submit() {
    console.log(this.userID);
    
    console.log("Enfermedades: ", this.diseasesList);
    console.log("Medicinas: ", this.needList);
    console.log("Tratamientos: ", this.needList);
    
    
    
  }

}
