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
  jobOpenings: JobOpenings[] = []
  linkMsg: string = ''

  linkEmpyt: string = ''

  titleJob: string = ''

  finally: string = ''
 
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private jobOpeningService: JobOpeningsService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    this.jobOpeningService.getById(id).subscribe((vacancy) => {
        this.jobOpenings.push(vacancy)
        this.titleJob = vacancy.jobTitle
        // console.log(vacancy)

        if(vacancy.applicationUrl === '') {
          this.linkMsg = 'Sem Link'
          this.linkEmpyt = 'link-empty a'
        }else {
          this.linkMsg = 'Acesse a vaga aqui'
        }

        this.finally = vacancy.stage === 'Finalizado' ? 'stage-finally' : ''
    })
  
  }

  getIcon(location: string): string {
    if (location.toLowerCase() === 'presencial') {
      return 'apartment'; // Ícone para vagas presenciais
    } else {
      return 'computer'; // Ícone para vagas remotas ou híbridas
    }
  }



}
