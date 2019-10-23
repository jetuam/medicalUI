/*angular core modules start */
import { Component, OnInit } from '@angular/core';
/*angular core modules end */
/*Sharing the common service */
import { CommonService } from '../service/common.service';
/*Third party PrimeNg Service */
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css'],
  providers: [MessageService, ConfirmationService]
})

/**
 * ApproverComponent is used to perform Approver related operation
 */
export class ApproverComponent implements OnInit {
  claims = [];
  claimsDetails;
  display: boolean;
  commends: string;
  localStorage;
  approve;
  showFwd: boolean;
  globelUrl: string;
  errorMsg: string;
  showErrorMsg: boolean;

  constructor(private service: CommonService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.localStorage = {};
    this.display = false;
    this.globelUrl = environment.localPath;
  }

  ngOnInit() {
    this.localStorage = this.service.getLocalStorage();
    if (this.localStorage.approvarId === 2) {
      this.showFwd = false;
    }
    else {
      this.showFwd = true;
    }
    this.getClaimsDetails();
  }

  /**
   * getClaimsDetails is used to perform claim details display related operation
   */
  getClaimsDetails() {
    this.service.getHttpRequest(this.globelUrl + 'claims/' + this.localStorage.approvarId).subscribe(res => {
      let claims: any = res;
      this.claims = claims.claimDetails;
      console.log(this.claims);
    }, (err) => {
      this.showErrorMsg = true;
      this.errorMsg = err.error.message
    });
  }

  /**
   * onClaimView is used to perform claim views related operation
   * @param {object} claim 
   */
  onClaimView(claim) {
    this.claimsDetails = claim;
    this.display = true;
  }
  /**
   *onClaimApprove is used to Approver will approve related operation
   */
  onClaimApprove() {
    this.approve = this.claimsDetails
    let claimApprove: object = {};
    claimApprove['approverId'] = this.localStorage.approvarId;
    claimApprove['policyId'] = this.approve['policyId'];
    claimApprove['claimStatus'] = 'approved';
    claimApprove['remarks'] = this.commends;
    claimApprove['claimId'] = this.approve['claimId'];
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Approve?',
      accept: () => {
        this.service.postHttpRequest(this.globelUrl + 'api/approver', claimApprove).subscribe(res => {
          this.getClaimsDetails();
        });
      }
    });
    this.display = false;
  }
  /**
   * onClaimReject is used to Approver will Reject related operation
   */
  onClaimReject() {
    this.approve = this.claimsDetails
    let claimReject: object = {};
    claimReject['approverId'] = this.localStorage.approvarId;
    claimReject['policyId'] = this.approve['policyId'];
    claimReject['claimStatus'] = 'rejected';
    claimReject['remarks'] = this.commends;
    claimReject['claimId'] = this.approve['claimId'];
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Reject?',
      accept: () => {
        this.service.postHttpRequest(this.globelUrl + 'api/approver', claimReject).subscribe(res => {
          this.getClaimsDetails();
        });
      }
    });
    this.display = false;
  }
  /**
   *onClaimFwd is used to level 1 will Fwd to level 2 approve related operation
    */
  onClaimFwd() {
    this.approve = this.claimsDetails
    let claimFwd: object = {};
    claimFwd['approverId'] = this.localStorage.approvarId;
    claimFwd['policyId'] = this.approve['policyId'];
    claimFwd['claimStatus'] = 'forwarded';
    claimFwd['remarks'] = this.commends;
    claimFwd['claimId'] = this.approve['claimId'];
    this.confirmationService.confirm({
      message: 'Are you sure that you want to forword higher level manager approve?',
      accept: () => {
        this.service.postHttpRequest(this.globelUrl + 'api/approver', claimFwd).subscribe(res => {
          this.getClaimsDetails();
        });
      }
    });
    this.display = false;
  }
}
