import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-makeclaim',
  templateUrl: './makeclaim.component.html',
  styleUrls: ['./makeclaim.component.css'],
  providers: [MessageService]
})
export class MakeclaimComponent implements OnInit {

  makeClaimForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.makeClaimForm = this.fb.group({
      'name': new FormControl('', Validators.required),
      'policyNumber': new FormControl('', Validators.required),
      'diagnosis': new FormControl('', Validators.required),
      'admissionDate': new FormControl('', Validators.required),
      'dischargeDate': new FormControl('', Validators.required),
      'totalClaimAmount': new FormControl('', Validators.required),
      'hospitalName': new FormControl('', Validators.required),
      'dischargeSummary': new FormControl('', Validators.required),
      'natureOfAilment': new FormControl('', Validators.required),
    });
  }

}
