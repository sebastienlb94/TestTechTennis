import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerFilter'
})
export class PlayerFilterPipe implements PipeTransform {

  transform(players: any, filterString: string) {
    if (players.lenght === 0 || filterString === '') {
        return players;
    }

    return players.filter((player:any) => `${player.firstname} ${player.lastname}`.toLowerCase().includes(filterString.toLowerCase()));
  }
}
