import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BankModule } from './modules/bank/bank.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/bank/material/material/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CoreModule } from './modules/bank/core/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BankModule,
    CoreModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
      NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
      SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
