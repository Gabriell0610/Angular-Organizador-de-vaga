import { Component, OnInit } from '@angular/core';
import { JobOpeningsService } from 'src/app/service/job-openings.service';
import { JobOpenings } from '../../shared/interfaces/JobOpenings'
import { ActivatedRoute, Router } from '@angular/router';


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
    private jobOpeningsService: JobOpeningsService,
    private route: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')
    this.jobOpeningsService.getById(id).subscribe((vacancy) =>  {{
      this.jobOpenings = vacancy
      console.log(this.jobOpenings)
    }})
  }


  editHandler(job: JobOpenings){
    //Essa variável armazena a propriedade id do objeto jobOpenings
    //Ele vai ser usado para identicar a vaga que está sendo editad
    const id = this.jobOpenings.id

    //o objeto jobOpenings recebe a propriedade job que armazena os valores do formulário
    this.jobOpenings = job
    
    this.jobOpeningsService.updateJob(id, this.jobOpenings).subscribe(() => {
      this.jobOpeningsService.showMensage('Vaga editada com sucesso')
      this.route.navigate(['/'])
    })
  }

}
