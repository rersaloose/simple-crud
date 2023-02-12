import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'bank', 
  loadChildren: () => import(`./modules/bank/bank.module`).then(m => m.BankModule)
  },
  {path:'', 
  loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
