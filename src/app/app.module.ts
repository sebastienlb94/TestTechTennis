import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlayerFilterPipe } from './player-list/player-filter.pipe';
import { PlayerCardComponent } from './player-card/player-card.component';


const routes: Routes = [
  { path: "", component: PlayerListComponent},
  { path: "player/:id", component: PlayerDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    PlayerFilterPipe,
    PlayerCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
