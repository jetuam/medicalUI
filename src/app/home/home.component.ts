import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { CommonService } from '../service/common.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
/**
 * HomeComponent is used to perform policy number search related operation
 */
export class HomeComponent implements OnInit {

  claimForm: FormGroup;
  policyDetails;
  showTable: boolean;
  globelUrl: string;

  constructor(private fb: FormBuilder, private messageService: MessageService, private service: CommonService) {
    this.showTable = false;
    this.globelUrl = environment.localPath;
  }

  ngOnInit() {
    /**
     * Claim form validation
     */
    this.claimForm = new FormGroup({
      policyno: new FormControl('', [Validators.required]),
    });

  }

  /**
   * onPolicySubmit is used to perform display the policy details related operation 
   */

  onPolicySubmit() {
    this.service.getHttpRequest(this.globelUrl + 'policy/' + this.claimForm.value.policyno).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: '', detail: res['message'] });
      this.policyDetails = res;
      this.showTable = true;
      this.claimForm.reset();
    },
      (err => {
        this.messageService.add({ severity: 'error', summary: ' ', detail: err.error.message });
        this.showTable = false;
      }));
  }

}
