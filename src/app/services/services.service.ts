import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor() { }

  private items:any[] = [
    {
      name:'LOL',
      description:'MMORPG',
      plataform:'PC'
    },
    {
      name:'VALORANT',
      description:'FPS SHOOTER',
      plataform:'PC'
    },
    {
      name:'LOR',
      description:'CARTAS ESTRATEGIA',
      plataform:'PC'
    },
    {
      name:'Wild RIft',
      description:'MMORPG',
      plataform:'Móvil'
    }
  ]

  getGames(){ 
    return this.items;
   }

}