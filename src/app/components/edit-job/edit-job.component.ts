import { Component, OnInit } from '@angular/core';
import { JobOpeningsService } from 'src/app/service/job-openings.service';
import { JobOpenings } from '../../shared/interfaces/JobOpenings'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  jobOpenings!: JobOpenings
  title = 'Edite alguma característica da vaga'

  constructor(
    private activateRoute: ActivatedRoute,
    private jobOpeningsService: JobOpeningsService
  ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')
    this.jobOpeningsService.getById(id).subscribe((vacancy) =>  {{
      this.jobOpenings = vacancy
      console.log(this.jobOpenings)
    }})
    
  }


  editHandler(job: JobOpenings){
    
  }

}
