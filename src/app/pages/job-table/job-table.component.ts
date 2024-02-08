import { Component, OnInit } from '@angular/core';
import { JobOpeningsService } from 'src/app/service/job-openings.service';
import { JobOpenings } from '../../shared/interfaces/JobOpenings'
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-job-table',
  templateUrl: './job-table.component.html',
  styleUrls: ['./job-table.component.css']
})
export class JobTableComponent implements OnInit {
  jobOpenings!: JobOpenings;
  displayedColumns = ['Nome da Vaga', 'Nome da empresa', 'Data', 'Site de Candidatura', 'Etapa', 
  'Nível de experiencia', 'Localização', 'Recrutador', 'Url da Vaga']
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private jobOpeningsService: JobOpeningsService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    this.jobOpeningsService.getById(id).subscribe((vacancy) => {

      console.log(this.jobOpenings)
    })
  
  }

}
