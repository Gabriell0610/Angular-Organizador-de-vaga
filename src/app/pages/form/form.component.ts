import { Component, OnInit } from '@angular/core';
import { JobOpenings } from 'src/app/shared/interfaces/JobOpenings';
import { JobOpeningsService } from 'src/app/service/job-openings.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  jobOpenings!: JobOpenings

  constructor(private jobOpeningsService: JobOpeningsService) { }

  ngOnInit(): void {
  }

  createHandler(jobOpenings: JobOpenings) {
    this.jobOpenings = jobOpenings
    
    this.jobOpeningsService.postJob(this.jobOpenings).subscribe(() => {
      this.jobOpeningsService.showMensage('Vaga Cadastrada com sucesso')
    })
  }

}
