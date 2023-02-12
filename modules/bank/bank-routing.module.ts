import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { ListBankComponent } from './components/list-bank/list-bank.component';

const routes: Routes = [
  {
    path:"",component:ListBankComponent,

  },

    {path:"details/:id",component:BankDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
