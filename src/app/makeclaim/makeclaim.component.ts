import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CommonService } from '../service/common.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-makeclaim',
  templateUrl: './makeclaim.component.html',
  styleUrls: ['./makeclaim.component.css'],
  providers: [MessageService]
})
/**
 * MakeclaimComponent is used to perform add(make) claims related operation
 */
export class MakeclaimComponent implements OnInit {
  natureOfAilments;
  makeClaimForm: FormGroup;
  uploadedFiles: any[] = [];
  filePath: string;
  globelUrl: string;

  constructor(private fb: FormBuilder, private messageService: MessageService, private service: CommonService) {
    this.globelUrl = environment.localPath;
  }

  ngOnInit() {
    /**
     * Make Claim Form Validations
     */
    this.makeClaimForm = new FormGroup({
      policyNo: new FormControl('', Validators.required),
      diagnosis: new FormControl('', Validators.required),
      admittedDate: new FormControl('', Validators.required),
      dischargeDate: new FormControl('', Validators.required),
      claimAmount: new FormControl('', Validators.required),
      hospitalName: new FormControl('', Validators.required),
      dischargeSummary: new FormControl('', Validators.required),
      natureOfAilment: new FormControl('', Validators.required),
    });
    /**
     * natureOfAilments is used to Selectbox options value
     */
    this.natureOfAilments = [];
    this.natureOfAilments.push({ label: 'Select Nature Of Ailments', value: '' });
    this.natureOfAilments.push({ label: 'General Hospitalization', value: 'General Hospitalization' });
    this.natureOfAilments.push({ label: 'Cardiac Attack', value: 'Cardiac Attack' });
    this.natureOfAilments.push({ label: 'Surgery', value: 'Surgery' });
    this.natureOfAilments.push({ label: 'Day Care', value: 'Day Care' });
    this.natureOfAilments.push({ label: 'Maternity', value: 'Maternity' });
    this.natureOfAilments.push({ label: 'Dental treatment', value: 'Dental treatment' });
  }

  /**
   * onUpload is used to file upload related operation
   * @param event 
   */
  onUpload(event) {
    let files = event.srcElement.files;
    let file = new FormData();
    file.append('file', files[0]);
    this.service.postHttpRequest(this.globelUrl + 'upload', file).subscribe(res => {
      this.filePath = res['filePath'];
    });
  }

  /**
   * addClaim is used to add claim data display related operation.
   * @param {object} claimVal 
   */
  addClaim(claimVal: object) {
    claimVal['claimUploadFilePath'] = this.filePath;
    this.service.postMakeClaim(claimVal).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: '', detail: res['message'] });
      this.makeClaimForm.reset();
    }, (err => {
      this.messageService.add({ severity: 'error', summary: ' ', detail: err.error.message });
    }));
  }

}
