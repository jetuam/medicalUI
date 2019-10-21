import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

  claimForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.claimForm = this.fb.group({
      'policyno': new FormControl('', Validators.required),
    });
  }

}
