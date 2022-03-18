import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../types/player'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPlayers () {
    return this.http.get<{ players:Player[]}>('https://data.latelier.co/training/tennis_stats/headtohead.json');
  }
}
