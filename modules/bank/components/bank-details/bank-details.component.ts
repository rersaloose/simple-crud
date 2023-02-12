import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css'],
})
export class BankDetailsComponent implements OnInit {
  currntPid = 0;
  bankdetais:any ={};
  constructor(
    private ActivatedRouter: ActivatedRoute,
    private BankService: BankService,
    private location:Location
  ) {}
  ngOnInit(): void {
    this.ActivatedRouter.paramMap.subscribe((e) => {
      console.log(e);
      this.currntPid = Number(e.get('id'));

      this.BankService.getBankbyId(this.currntPid).subscribe((res: any) => {
        this.bankdetais = res;
        console.log(this.bankdetais)
      });
    });
  }
  BACK(){
    this.location.back()
  }
}
