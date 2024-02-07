import { Component, OnInit } from '@angular/core';
import { JobOpeningsService } from 'src/app/service/job-openings.service';
import { JobOpenings } from '../../shared/interfaces/JobOpenings'

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  iconLocation: string = 'computer'
  jobOpenings: JobOpenings[] = []

  constructor(private jobOpeningService :JobOpeningsService) { }

  ngOnInit(): void {
    this.jobOpeningService.getJob().subscribe((vacancy) => {
      this.jobOpenings = vacancy
    })
  }

  getIcon(location: string): string {
    if (location.toLowerCase() === 'presencial') {
      return 'apartment'; // Ícone para vagas presenciais
    } else {
      return 'computer'; // Ícone para vagas remotas ou híbridas
    }
  }

  delCard(id: any) {
    this.jobOpeningService.deljob(id).subscribe(() =>{
      this.jobOpeningService.showMensage('Vaga deletada com sucesso!')
    })
    this.jobOpenings = this.jobOpenings.filter((job) => {
      return job.id !== id
    })
  }

}
