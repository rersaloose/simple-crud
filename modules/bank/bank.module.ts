import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';
import { ListBankComponent } from './components/list-bank/list-bank.component';

import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { CoreModule } from './core/core/core.module';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListBankComponent, BankDetailsComponent, AddBankComponent],
  imports: [
    CommonModule,
    BankRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class BankModule {}
