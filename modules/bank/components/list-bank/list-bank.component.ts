import { ToastrService } from 'ngx-toastr';
import { BankService } from './../../services/bank.service';
import { Component, OnInit } from '@angular/core';
import { AddBankComponent } from '../add-bank/add-bank.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.css'],
})
export class ListBankComponent implements OnInit {
  allBank: any = [];
  showSpinner:boolean=false
  constructor(private BankService: BankService, private dialog: MatDialog,
    private toster:ToastrService) {}
  displayedColumns: string[] = [
    'id',
    'name',
    'createdBy',
    'actions',
   
  ];
  ngOnInit(): void {
    this.getallbank();
  }
  getallbank() {
    this.showSpinner=true
    this.BankService.getAllbank().subscribe((res: any) => {
      this.showSpinner=false
      this.allBank = res;
      console.log(this.allBank);
    });
  }
  addBank() {
    const dialogRef = this.dialog.open(AddBankComponent, {
      width: '750px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('resalt' + result);
        this.getallbank();
      }
    });
  }

  deletebank(id: any) {
    this.BankService.deleteBank(id).subscribe((res: any) => {
this.toster.success('success','Bank is deleted')
   
    });
    this.getallbank();
  }
  updatebank(item: any) {
    const dialogRef = this.dialog.open(AddBankComponent, {
      width: '750px',
      data:item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getallbank();
      }
    });
  }
}
