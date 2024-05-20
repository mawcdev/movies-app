import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../data/model/feedback';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateHeaderName } from 'http';
import { emailDomainValidator } from '../../validations/email.validator';
import { inappropriateKeywordsValidator } from '../../validations/keywords.validator';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{
  //feedback: Feedback= new Feedback('', '', 2, '', '');
  feedbackForm!:FormGroup;
  /**
   *
   */
  constructor(private fb:FormBuilder) {
    
  }
  ngOnInit(): void {
    // this.feedbackForm= this.fb.group({
    //   emailAddress:['', [Validators.required, Validators.email]],
    //   phoneNumber:['', [Validators.pattern('[0-9]{4}-[0-9]{4}')]],
    //   rate:[8, [Validators.min(0), Validators.max(10)]],
    //   feedbackTitle:['', [Validators.required]],
    //   feedback:['', [Validators.required]]
    // })
    this.feedbackForm= new FormGroup({
      emailAddress: new FormControl('', [Validators.required, Validators.email, emailDomainValidator('@google.com')]),
      phoneNumber:new FormControl('', [Validators.pattern('[0-9]{4}-[0-9]{4}')]),
      rate:new FormControl(8, [Validators.min(0), Validators.max(10)]),
      feedbackTitle:new FormControl('', [Validators.required, inappropriateKeywordsValidator(["spam","bot"])]),
      feedback:new FormControl('', [Validators.required, inappropriateKeywordsValidator(["spam","bot"])])
    })
  }

  submitFeedback(){
    //console.log('Feedback form [Submit] -', this.feedback);
    console.log('Feedback form [Submit] -', this.feedbackForm.value);
  }
}
