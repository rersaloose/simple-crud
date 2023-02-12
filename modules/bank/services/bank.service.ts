import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private http: HttpClient) {}
  createBank(data: any) {
    return this.http.post(environment.basUrl + '/api/Bank/CreateBank', data);
  }
  updateBank(data: any, id: any) {
    return this.http.put(environment.basUrl +'/api/Bank/UpdateBank/'+ id,data);
  }
  getAllbank() {
    return this.http.get(environment.basUrl + '/api/Bank/GetAllBanks');
  }
  getBankbyId(id: any) {
    return this.http.get(environment.basUrl + '/api/Bank/GetBankById/' + id);
  }
  deleteBank(id: any) {
    return this.http.delete(environment.basUrl + '/api/Bank/DeleteBank/' + id);
  }
}
