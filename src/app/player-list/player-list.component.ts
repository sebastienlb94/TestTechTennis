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

  constructor(private dataService: DataService) {
    this.dataService.getPlayers()
      .subscribe((response: any) => {
        this.players = response.players.sort((a: Player, b: Player) => {
          if (a.data.rank < b.data.rank) return -1;
          else if (a.data.rank > b.data.rank) return 1;
          return 0;
        });
      });
  }

  ngOnInit(): void {
  }

}
