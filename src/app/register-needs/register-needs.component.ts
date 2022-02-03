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
  diseases: {name: string, id: number, choosen: boolean}[];
  needs: Array<{name: string, id: number, choosen: boolean}>;


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
        name: r.name,
        choosen: false,
      }))
    }, error => {
      console.error(error)
    })

    this.diseasesAndNeedsService.needs().subscribe(response => {
      this.needs = response.map(r => ({
        id: r.id,
        name: r.name,
        choosen: true,
      }))
    }, error => {
      console.error(error)
    })

  }

  /**
   * selectEnfermedad
   */
  public selectDisease(event, disease) {
    disease.choosen = !disease.choosen
  }

  /**
   * selectMedicina
   */
   public selectNeed(event, need) {
    need.choosen = !need.choosen
  }

  /**
   * submit
   */
  public submit() {
    const diseases = this.diseases.filter(disease => disease.choosen)
    const needs = this.needs.filter(need => need.choosen)
    if (needs.length === 0) {
      alert('Debes escoger al menos un tipo de información')
      return
    }

    if (diseases.length === 0) {
      alert('Debes escoger al menos una enfermedad de interés')
      return
    }

    console.log(diseases, needs)
    this.diseasesAndNeedsService.setupPreferences(diseases.map(d => d.name), needs.map(n => n.name)).subscribe(response => {
      console.log('success')
      console.log(response)
      this.router.navigateByUrl('/feed')
    }, error => {
      console.log('error')
      console.log(error)
    })
  }
}
