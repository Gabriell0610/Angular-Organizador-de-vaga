import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { JobOpenings } from 'src/app/shared/interfaces/JobOpenings';
import { JobOpeningsService } from 'src/app/service/job-openings.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  @Output() submited = new EventEmitter<JobOpenings>()

  jobForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.jobForm = new FormGroup( {
      jobTitle: new FormControl('', Validators.required),
      companyName: new FormControl('',Validators.required),
      applicationDate: new FormControl('', Validators.required),
      applicationWebSite: new FormControl('', Validators.required),
      stage: new FormControl('', Validators.required),
      experienceLevel: new FormControl('', Validators.required),
      location: new FormControl(''),
      techRecruiter: new FormControl(''),
      applicationUrl: new FormControl(''),
    })
  }


  get jobTitle() {
    return this.jobForm.get('jobTitle')!
  }

  get companyName() {
    return this.jobForm.get('companyName')!
  }

  get applicationDate() {
    return this.jobForm.get('applicationDate')!
  }

  get applicationWebSite() {
    return this.jobForm.get('applicationWebSite')!
  }

  get stage() {
    return this.jobForm.get('stage')!
  }

  get experienceLevel() {
    return this.jobForm.get('experienceLevel')!
  }

  submit() {
    if(this.jobForm.invalid){
      return
    }

    this.submited.emit(this.jobForm.value)
  }

}
