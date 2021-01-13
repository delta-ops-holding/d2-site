import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clan } from '../model/clan';

const apiUrl: string = "http://api.the-queenscourt.com/v1";

@Injectable({
  providedIn: 'root'
})
export class InformationService {


  constructor(
    private http: HttpClient,
  ) { }

  getClans(): Observable<Clan[]> {
    return this.http.get<Clan[]>(`${apiUrl}/clan`);
  }
}
