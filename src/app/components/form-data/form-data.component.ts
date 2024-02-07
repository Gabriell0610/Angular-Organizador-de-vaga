import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { JobOpenings } from 'src/app/shared/interfaces/JobOpenings';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  @Output() submited = new EventEmitter<JobOpenings>()
  @Input() jobData: JobOpenings | null = null
  @Input() title: string = ''

  jobForm!: FormGroup

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.jobForm = new FormGroup( {
      jobTitle: new FormControl(this.jobData ? this.jobData.jobTitle : '', Validators.required),
      companyName: new FormControl(this.jobData ? this.jobData.companyName : '',Validators.required),
      applicationDate: new FormControl(this.jobData ? this.jobData.applicationDate : '', Validators.required),
      applicationWebSite: new FormControl(this.jobData ? this.jobData.applicationWebSite : '', Validators.required),
      stage: new FormControl(this.jobData ? this.jobData.stage : '', Validators.required),
      experienceLevel: new FormControl(this.jobData ? this.jobData.experienceLevel : '', Validators.required),
      location: new FormControl(this.jobData ? this.jobData.location : ''),
      techRecruiter: new FormControl(this.jobData ? this.jobData.techRecruiter : ''),
      applicationUrl: new FormControl(this.jobData ? this.jobData.applicationUrl : ''),
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

  cancel() {
    this.route.navigate(['/'])
  }

}
