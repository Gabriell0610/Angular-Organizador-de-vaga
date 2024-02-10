import { Component, OnInit } from '@angular/core';
import { JobOpeningsService } from 'src/app/service/job-openings.service';
import { JobOpenings } from '../../shared/interfaces/JobOpenings';


@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  iconLocation: string = 'computer'
  jobOpenings: JobOpenings[] = []
  finalizedJobOpenings: JobOpenings[] = []

  //Não esquecer de Criar um array para cada tipo de aba no html ou refatorar o código 


  constructor(private jobOpeningService :JobOpeningsService) { }

  ngOnInit(): void {
    this.jobOpeningService.getJob().subscribe((vacancy) => {
      this.jobOpenings = vacancy

      //A array finalizedJobOpenings vai pegar as vagas onde o estagio é igual a 'Finalizado' 
      //e esse array será iterado na aba de Finalizados no HTML
      this.finalizedJobOpenings = this.filterStageVacancy()    

      //O array jobOpenings filtra Vagas que tem o stage diferente de 'Finalizado',
      //E esse array será percorrido pela aba de 'Em Andamento' no HTML
      this.jobOpenings = this.jobOpenings.filter((job) => {
        return job.stage !== "Finalizado"
      })

      console.log(this.jobOpenings)
    })
  }
  
  filterStageVacancy() {
    //Retorna a vaga que tem o stage igual a 'Finalizado'
    return this.jobOpenings.filter((job) => job.stage === 'Finalizado')
  }

  //Funçao que muda o ícone no HTML de acordo com a localização da vaga
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

    //Atualizando os arrays
    this.jobOpenings = this.jobOpenings.filter((job) => job.id !== id );

    this.finalizedJobOpenings = this.finalizedJobOpenings.filter((job) => job.id !== id);
  }

}
