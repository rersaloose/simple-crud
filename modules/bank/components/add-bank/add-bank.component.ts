import { ToastrService } from 'ngx-toastr';
import { BankService } from './../../services/bank.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css'],
})
export class AddBankComponent implements OnInit {
  newbankform!: FormGroup;
  allBank: any = [];
  showSpinner:boolean=false
  constructor(
    private ToastrService: ToastrService,
    private FormBuilder: FormBuilder,
    public matDialog: MatDialog,
    public dialog: MatDialogRef<AddBankComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private BankService: BankService
  ) { }

  ngOnInit(): void {
    this.newbankform = this.FormBuilder.group({
      BranchId: [+`${localStorage.getItem('branchId')}`],
      bank: this.FormBuilder.group({
        name: [this.data?.name || ''],
        companyId: [+`${localStorage.getItem('companyId')}`],
        createdBy: [+`${localStorage.getItem('employeeId')}`],
        TimeZone: [+`1`],
      }),
    });
    // console.log(this.newbankform.value);
    console.log(this.data);
    this.getallbank();
  }
  getallbank() {
    this.BankService.getAllbank().subscribe((res: any) => {
      this.allBank = res;

    });
  }

  createbank() {
    this.showSpinner=true
    this.BankService.createBank(this.newbankform.value).subscribe(
      (res: any) => {
        this.showSpinner=false
        this.ToastrService.success('success', 'Bank is Created')
        this.getallbank();
        this.dialog.close(true);
      }
    );
  }
  update() {
this.showSpinner=true
    this.BankService.updateBank(
      this.newbankform.get(['bank'])?.value
      , this.data.bankId
    ).subscribe((res: any) => {
      this.showSpinner=false
      this.ToastrService.success('success', 'Bank is Updated')
      console.log(res);
      this.dialog.close(true);
    });
  }
}
