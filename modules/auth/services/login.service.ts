import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private Http: HttpClient) {}

  loginn(data: any) {
    return this.Http.post(environment.basUrl + '/api/Auth/login', data);
  }
}
