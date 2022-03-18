import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Player } from '../types/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  filteredString: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPlayers()
      .subscribe((response:any) => {
        this.players = response.players;
      });
  }

}
