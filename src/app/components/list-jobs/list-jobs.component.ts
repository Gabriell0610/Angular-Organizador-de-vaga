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
      this.jobOpenings = vacancy.map((job) => {
        return job
      })
      console.log(this.jobOpenings)
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
