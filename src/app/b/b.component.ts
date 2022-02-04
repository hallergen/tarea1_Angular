import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/services.service';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit{

  list : any[] = []
  constructor(private gs:GamesService) { }

  viewGames(){
    return this.gs.getGames();
  }
  
 ngOnInit(): void {
     this.list = this.viewGames()
 }

}
