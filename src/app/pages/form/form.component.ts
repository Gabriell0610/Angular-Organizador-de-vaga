import { Component, OnInit } from '@angular/core';
import { JobOpenings } from 'src/app/shared/interfaces/JobOpenings';
import { JobOpeningsService } from 'src/app/service/job-openings.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  jobOpenings!: JobOpenings
  title = 'Preencha as características da vaga'

  constructor(
    private jobOpeningsService: JobOpeningsService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  createHandler(jobOpenings: JobOpenings) {
    this.jobOpenings = jobOpenings
    
    this.jobOpeningsService.postJob(this.jobOpenings).subscribe(() => {
      this.jobOpeningsService.showMensage('Vaga Cadastrada com sucesso')
      this.route.navigate(['/'])
    })
  }

}
