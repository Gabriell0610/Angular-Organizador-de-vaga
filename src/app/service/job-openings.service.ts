import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JobOpenings } from '../shared/interfaces/JobOpenings'
import { MatSnackBar } from '@angular/material/snack-bar'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobOpeningsService {
  baseUrl = environment.baseUrl

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  postJob(jobOpenings: JobOpenings): Observable<JobOpenings>{
    return this.http.post<JobOpenings>(this.baseUrl, jobOpenings)
  }

  getJob(): Observable<JobOpenings[]>{
    return this.http.get<JobOpenings[]>(this.baseUrl)
  }


  showMensage(msg: string) {
    this.snackBar.open(msg, '',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
