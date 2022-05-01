import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Airline} from "../models/airline";
import {API_URL} from "../constants/constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http: HttpClient) {}

  public getAirline(id: number): Observable<Airline>{
    return this.http.get<Airline>(`${API_URL}/airlines/${id}`);
  }
}
