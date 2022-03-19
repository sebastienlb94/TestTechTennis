import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../types/player'
import { DataService } from '../services/data.service';

const title = {
  year: 2021,
  rank: 2,
  competitions: [
    'ATP Masters 1000 Paris (Indoor/Hard)',
    'Wimbledon (Outdoor/grass)',
    'Roland Garros (Outdoor/Clay)',
    'Belgrade 2 (Outdoor/Clay)',
    'Australian Open (Outdoor/Hard)'
  ],
}

const titles = [title, title, title];
@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  player: Player | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.dataService.getPlayers()
      .subscribe((response: any) => {
        console.log(response)
        this.player = { ...response.players.find((player: Player) => player.id === id), titles };
      });
  }

  ngOnInit(): void {
  }

}
